const nodemailer = require('nodemailer');
const { EMAIL_PASSWORD,EMAIL } = process.env
const fs = require('fs')
const path = require('path');

const templatePath = path.join(__dirname, 'template.html');
const htmlTemplate = fs.readFileSync(templatePath, 'Utf8')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD
    }
  });

const sendEmail = (nombre, correo)=>{

  const mailOptions = {
      from: EMAIL,
      to: correo,
      subject: '🚀 lets go!!',
      html: htmlTemplate
  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log('⚠️' + error)
      } else {
        console.log('✅ Email sent: '+ nombre)
      }
  })
}

module.exports = sendEmail