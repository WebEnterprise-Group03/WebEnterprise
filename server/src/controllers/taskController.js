const Task = require('../models/taskModel');
const Category = require('../models/ideaCategoryModel');

class taskController {
  //[GET] /task/listTask
  async listTask(req, res, next) {
    await Task.find({})
      .then((task) => {
        res.render('task/listTask', {
          task: task,
        });
      })
      .catch(next);
  }

  //[GET] /task/createTask
  async createTask(req, res, next) {
    res.render('task/createTask');
  }

  setDeadlineIdea(req, res, next) {
    res.render('task/setDeadlineIdea');
  }

  setDeadlineCmt(req, res, next) {
    res.render('task/setDeadlineCmt');
  }

  //[POST] /task/storeTask
  async storeTask(req, res, next) {
    const startDate = new Date();
    const startDay = req.body.startDay;
    const startTime = req.body.startTime;

    const endDate = new Date();
    const endDay = req.body.endDay;
    const endTime = req.body.endTime;

    startDate.setFullYear(startDay.split('-')[0]);
    startDate.setMonth(startDay.split('-')[1] - 1);
    startDate.setDate(startDay.split('-')[2]);

    startDate.setHours(startTime.split(':')[0]);
    startDate.setMinutes(startTime.split(':')[1]);


    endDate.setFullYear(endDay.split('-')[0]);
    endDate.setMonth(endDay.split('-')[1] - 1);
    endDate.setDate(endDay.split('-')[2]);

    endDate.setHours(endTime.split(':')[0]);
    endDate.setMinutes(endTime.split(':')[1]);

    const formData = {
      startDate: startDate,
      endDate: endDate,
      // duration: req.body.duration,
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
    };

    // const category = await Category.findOne({ name: req.body.ideaCategory });
    // if (!category) {
    //   return res.render('task/createTask', {
    //     error: true,
    //     message: 'Category does not exist!',
    //   });
    // }
    //
    // formData.ideaCategory = category._id;
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

  //[GET] /task/:id/updateTask
  async updateTask(req, res, next) {
    const categories = await Category.find({}).lean();
    Task.findById(req.params.id)
      .then((tasks) => {
        res.render('task/updateTask', {
          tasks: tasks,
          categories: categories,
        });
      })
      .catch(next);
  }

  //[PUT] /task/:id
  async update(req, res, next) {
    const title = req.body.title;
    const day = req.body.day;
    const endTime = req.body.endTime;
    const duration = req.body.duration;
    const ideaCategory = await Category.findOne({
      name: req.body.ideaCategory,
    });
    const description = req.body.description;
    const slug = req.body.slug;

    Task.updateOne(
      { _id: req.body._id },
      {
        title: title,
        day: day,
        endTime: endTime,
        duration: duration,
        ideaCategory: ideaCategory._id,
        description: description,
        slug: slug,
      },
    )
      .then(() => res.redirect('/task/listTask'))
      .catch(next);
  }

  deleteTask(req, res, next) {
    Task.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  forceDeleteTask(req, res, next) {
    Task.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  async trashTask(req, res, next) {
    // const ideaCategory = await Category.find({});
    Task.findDeleted({ })
      // .lean()
      // .populate('ideaCategory', 'name', 'ideaCategories')
      .then((tasks) =>
        res.render('task/trashTask', {
          tasks,
        }),
      )
      .catch(next);
  }

  restoreTask(req, res, next) {
    Task.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new taskController();
