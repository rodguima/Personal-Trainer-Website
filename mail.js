require('dotenv').config();

const nodemailer = require('nodemailer');

//step 1 "Config Transporter"
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  }
});

//step 2 "Config Send Mail"
const sendMail = (name, lastname, email, text, phone, cb) => {
  let mailOptions = {
    from: 'naro.dstudio@gmail.com',
    to: 'naro.dstudio@gmail.com',
    subject: 'Nova mensagem de: ' + name + ' ' + lastname,
    text: text,
    html: `
    <p>Você tem uma nova mensagem!</p>
    <h3>Detalhes do contato:</h3>
    <ul>
      <li>Nome: ${name}</li>
      <li>Sobrenome: ${lastname}</li>
      <li>Telefone: ${phone}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>Mensagem:</h3>
    <p>${text}</p>`,
  };

  //step 3
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
      console.log('Error Occurs', err);
    } else {
      cb(null, data);
      console.log('Email on the way!');
    }
  });
}

module.exports = sendMail;