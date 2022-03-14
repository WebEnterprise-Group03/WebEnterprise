const nodemailer = require('nodemailer');

class sendEmail{
  send(req,res,next){
    const mailOptions = {
      from: 'tuhuu7165@gmail.com',
      to: 'tudhgch18565@fpt.edu.vn',
      subject: 'Email from HUUTU: A text message',
      text: 'Hello con cac'
    };

//Email transport configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tuhuu7165@gmail.com',
        pass: '123@123a'
      }
    });

    //Send email
    transporter.sendMail(mailOptions, (error, info)=>{
      if (error){
        console.log(error);
      }else {
        console.log('Email send: ' + info.response);
      }
      next();
    });
  }
}

module.exports = new sendEmail();