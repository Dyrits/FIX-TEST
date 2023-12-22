const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASSWORD
  }
});


function sendMail(options) {
  transport.sendMail(options);
}

module.exports = sendMail;