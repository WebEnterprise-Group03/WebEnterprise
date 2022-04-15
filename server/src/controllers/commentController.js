const Comment = require('../models/cmtModel.js');
const Idea = require('../models/ideaModel');
const Account = require('../models/accountModel');
const Task = require('../models/taskModel');
const nodemailer = require('nodemailer');

function sendEmailAfterCmt(email) {
  const mailOptions = {
    from: 'tuhuu7165@gmail.com',
    to: `${email}`,
    subject: 'One more person commented on your post',
    text:
      'Dear Sir Staff,\n' +
      'One person commented on your post. You can check it out.\n' +
      'Thank you in advance.',
  };

  //Email transport configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tuhuu7165@gmail.com',
      pass: '123@123a',
    },
  });

  //Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email send: ' + info.response);
    }
  });
}

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
    const test = IdeaPost.account;

    formData.idea = IdeaPost._id;
    formData.author = author._id;
    Comment.create(formData, (err, item) => {
      if (getCurrentDate > endDate) {
        Account.findOne({ _id: test }).then((user) => {
          const email = user.email;
          sendEmailAfterCmt(email);
          console.log(email);
        });
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
