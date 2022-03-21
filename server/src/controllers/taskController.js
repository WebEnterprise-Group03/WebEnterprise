const Task = require('../models/taskModel');
const Category = require('../models/ideaCategoryModel');

class taskController {
  //[GET] /task/listTask
  async listTask(req, res, next) {
    const ideaCategory = await Category.find({});
    await Task.find({ ideaCategory })
      .lean()
      .populate('ideaCategory', 'name', 'ideaCategories')
      .then((task) => {
        res.render('task/listTask', {
          task: task,
        });
      })
      .catch(next);
  }

  detailTask(req, res, next) {}

  //[GET] /task/createTask
  async createTask(req, res, next) {
    const categories = await Category.find({}).lean();
    res.render('task/createTask', {
      categories: categories,
    });
  }

  //[POST] /task/storeTask
  async storeTask(req, res, next) {
    const formData = {
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
    };

    const category = await Category.findOne({ name: req.body.ideaCategory });
    if (!category) {
      return res.render('task/createTask', {
        error: true,
        message: 'Category does not exist!',
      });
    }

    formData.ideaCategory = category._id;
    // await Task.create(formData);
    // return res.redirect('/task/listTask');
    const task = new Task(formData);
    await task
      .save()
      .then(() => {
        res.redirect('/task/listTask');
      })
      .catch((e) => {
        res.send('Failed saved');
      });
  }

  deleteTask(req, res, next) {}

  forceDeleteTask(req, res, next) {}
}

module.exports = new taskController();
