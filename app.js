const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.PASSWORD_USER,
  },
});

const htmlContent = `<h2>
E-mail com <span style="color: red;">Nodemailer</span>!
</h2>
<p>
  Olá, tudo bem? 
</p>
<p>
  Esse é um pequeno projeto, apenas para compreender os conceitos básicos de enviar e-mail com Node.Js através do Nodemailer.&#128149;
</p>`;

transporter.sendMail({
  from: {
    name: process.env.NAME_USER,
    address: process.env.EMAIL_USER,
  },
  to: {
    address: process.env.RECEIVERS_EMAIL,
  },
  subject: 'Enviando e-mail com Nodemailer',
  html: htmlContent,
}).then(() => console.log('E-mail enviado com sucesso')).catch((err) => console.log('Erro ao enviar e-mail', err));
