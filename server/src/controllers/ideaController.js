const Comment = require('../models/cmtModel');
const Idea = require('../models/ideaModel');
const Category = require('../models/ideaCategoryModel');
const Account = require('../models/accountModel');
const Task = require('../models/taskModel');
const account = require('../models/accountModel');
const reqLogin = require('../middlewares/authJwt');
const fs = require('fs');
const archiver = require('archiver');
const alert = require('alert');

const checkUser = reqLogin.checkCurrentUser;

class ideaController {
  //[GET] /idea/detail/:slug
  detail(req, res, next) {
    const { currentUser } = req.data;
    const { _id } = req.params.id;
    Account.findOne({ _id: req.data.id })
      .exec()
      .then((info) => {
        // console.log(info)
        Idea.findOne({ _id: req.params.id })
          .lean()
          .populate({
            path: 'comments',
            populate: [{ path: 'author' }],
          })
          .exec()
          .then((ideas) => {
            // console.log(ideas)
            res.render('idea/detail', { ideas: ideas, info: info });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async dashBoard(req,res,next){
      const idea = await Idea.find({});
      await Category.find({ idea })
        .lean()
        .populate('ideas', 'title', 'ideas')
        .then((categories) => {
          res.render('idea/dashBoard', { categories: categories });
        })
        .catch(next);
  }

  //[PUT] /detail/:id/like
  async like(req, res, next) {
    try {
      const idea = await Idea.findById(req.params.id);
      const currentUser = req.data._id.toString();
      const idealike = idea.likes;
      if (idealike.includes(currentUser)) {
        return alert('Idea already liked');
      } else {
        idea.likes.unshift(req.data._id);
        idea.vote += 1;
        await idea.save();
        res.json(idea.likes);
        alert('Idea liked');
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  }

  //[PUT] /detail/:id/dislike
  async dislike(req, res, next) {
    try {
      const idea = await Idea.findById(req.params.id);
      const currentUser = req.data._id.toString();
      const idealike = idea.likes;
      if (idealike.includes(currentUser)) {
        const removeIndex = idealike
          .map((like) => like.toString())
          .indexOf(currentUser);

        idealike.splice(removeIndex, 1);
        idea.vote -= 1;
        await idea.save();
        res.json(idealike);
        alert('Idea Unliked');
      } else {
        return alert('Idea not been liked');
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  }

  //[GET] /idea/create
  async create(req, res, next) {
    const categories = await Category.find({}).lean();
    res.render('idea/create', {
      categories: categories,
    });
  }

  async store(req, res, next) {
    const formData = {
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
      file: req.file.originalname,
      // account: req.data.email
    };

    const category = await Category.findOne({ name: req.body.ideaCategory });
    if (!category) {
      return res.render('idea/create', {
        error: true,
        message: 'Category does not exist!',
      });
    }

    formData.ideaCategory = category._id;
    const idea = new Idea(formData);
    idea.vote = 0;
    await idea
      .save()
      .then((item) => {
        category.ideas.push(item);
        category.save();
        res.redirect('/main/show');
      })
      .catch((error) => {
        res.send('Failed saved');
      });
  }

  //[GET] /idea/storedIdeas
  async storedIdeas(req, res, next) {
    const ideaCategory = await Category.find({});
    await Idea.find({ ideaCategory })
      .lean()
      .populate('ideaCategory', 'name', 'ideaCategories')
      .then((ideas) => {
        res.render('idea/storedIdeas', { ideas: ideas });
      })
      .catch(next);
  }

  //[GET] /idea/:id/update
  update(req, res, next) {
    Idea.findById(req.params.id)
      .then((ideas) => {
        res.render('idea/update', {
          ideas: ideas,
        });
      })
      .catch(next);
  }

  //[PUT] /idea/:id
  updateIdea(req, res, next) {
    Idea.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/idea/storedIdeas'))
      .catch(next);
  }

  //[DELETE] /idea/:id
  deleteIdea(req, res, next) {
    Idea.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[DELETE] /idea/:id/forceDeleteIdea
  forceDeleteIdea(req, res, next) {}

  async listCategory(req, res, next) {
    await Category.find({})
      .then((categories) => {
        res.render('idea/listCategory', {
          categories: categories,
        });
      })
      .catch(next);
  }

  async downLoadFile(req, res, next) {
    let a = req.body.check;
    if (!a) {
      console.log('Don have any doc');
    }

    let output = fs.createWriteStream('./src/publics/fileDownload.zip');
    let archive = archiver('zip', {
      zlib: { level: 9 },
    });

    output.on('close', () => {
      console.log(archive.pointer() + ' total bytes');
      console.log(
        'Archiver has been finalized and the output file descriptor has closed',
      );
    });

    output.on('end', function () {
      console.log('Data has been drained');
    });

    archive.on('error', function (err) {
      throw err;
    });

    archive.pipe(output);
    for (let i = 1; i < a.length; i++) {
      let file = 'src/publics/doc/' + a[i];
      console.log('file name: ', file);
      archive.append(fs.createReadStream(file), { name: a[i] });
    }
    await archive.finalize();
    res.redirect('/idea/downLoadFile');
  }
}

module.exports = new ideaController();
