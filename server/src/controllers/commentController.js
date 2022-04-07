const Comment = require('../models/cmtModel.js');
const Idea = require('../models/ideaModel');
const Account = require('../models/accountModel');

class cmtController {
  async doComment(req, res, next) {
    const { data } = req.data.username;
    const { _id } = req.body;
    const formData = {
      content: req.body.content,
    };

    const IdeaPost = await Idea.findOne({ _id: _id });
    const author = await Account.findOne({ username: req.data.username });

    formData.idea = IdeaPost._id;
    formData.author = author._id;
    Comment.create(formData, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        item.save();

        IdeaPost.comments.push(item);
        IdeaPost.save();
        res.redirect('back');
      }
    });
  }

  async print(req, res, next) {}
}

module.exports = new cmtController();
