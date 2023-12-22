const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASSWORD
  }
});


function sendMail(options) {
  console.log(process.env.MAIL_AUTH_USER);
  console.log(process.env.MAIL_AUTH_PASSWORD);
  transport.sendMail(options);
  console.log("Mail sent");
}

module.exports = sendMail;