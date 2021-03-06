const nodemailer     = require("nodemailer"),
      creds          = require("./creds"),
      smtpTransport  = require("nodemailer-smtp-transport");

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "Gmail",
    auth: {
      user: creds.user,
      pass: creds.password
    }
  })
);

transporter.sendMail({
   from: creds.user,
   to: creds.user,
   subject: 'hello',
   html: '<h1>Hello from nodemailer!</h1>',
//    text: 'hello world!'
});