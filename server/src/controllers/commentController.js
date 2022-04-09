const Comment = require('../models/cmtModel.js');
const Idea = require('../models/ideaModel');
const Account = require('../models/accountModel');
const Task = require('../models/taskModel');

class cmtController {
  async doComment(req, res, next) {
    const DateNow = Date.now();
    const getCurrentDate = new Date(DateNow);
    const { data } = req.data.username;
    const { _id } = req.body;
    // const title = "TestDealine";
    const formData = {
      content: req.body.content,
    };

    const IdeaPost = await Idea.findOne({ _id: _id });
    const author = await Account.findOne({ username: req.data.username });
    const TaskDealine = await Task.findOne({ title: 'SetDeadlineComment' });
    const endDate = TaskDealine.endDate;

    formData.idea = IdeaPost._id;
    formData.author = author._id;
    Comment.create(formData, (err, item) => {
      if (getCurrentDate > endDate) {
        item.save();

        IdeaPost.comments.push(item);
        IdeaPost.save();
        res.redirect('back');
      } else {
        console.log('Da den deadline');
      }
    });
  }

  async print(req, res, next) {}
}

module.exports = new cmtController();
