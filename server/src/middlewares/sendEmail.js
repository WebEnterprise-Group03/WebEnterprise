const nodemailer = require('nodemailer');

class sendEmail {
  send(req, res, next) {
    const mailOptions = {
      from: 'tuhuu7165@gmail.com',
      to: 'tudhgch18565@fpt.edu.vn',
      subject: 'The staff submitted the idea',
      text:
        'Dear Mr Coordinator ,\n' +
        'There is a staff who submits the idea. Please check it and give any feedback to the staff\n' +
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
      next();
    });
  }

  sendAfterCmt(req, res, next) {
    const emaila = req.data.email;
    const fullName = req.data;

    const mailAfterCmt = {
      from: 'tuhuu7165@gmail.com',
      to: `${email}`,
      subject: 'One more person commented on your post',
      text:
        'Dear Mr Staff ,\n' +
        'There is a completed task. Please check it and set the status for the task.\n' +
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
    transporter.sendMail(mailAfterCmt, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email send: ' + info.response);
      }
      next();
    });
  }

  sendAfterCompletedDeadline(req, res, next) {
    const mailCompleted = {
      from: 'tuhuu7165@gmail.com',
      to: 'tudhgch18565@fpt.edu.vn',
      subject: 'The task have completed',
      text:
        'Dear Mr Admin ,\n' +
        'There is a completed task. Please check it and set the status for the task.\n' +
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
    transporter.sendMail(mailCompleted, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email send: ' + info.response);
      }
      next();
    });
  }
}

module.exports = new sendEmail();
