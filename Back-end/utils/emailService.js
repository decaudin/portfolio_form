/*const nodemailer = require("nodemailer");
const { sfrUser, sfrPass } = require('../server');

const transporter = nodemailer.createTransport({
  host: 'smtp.sfr.fr',
  port: 465,
  secure: true,
  auth: {
    user: sfrUser,
    pass: sfrPass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = (mailOptions) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Erreur lors de l'envoi de l'e-mail:", error);
      throw new Error("Erreur lors de l'envoi de l'e-mail");
    } else {
      console.log("E-mail envoyé avec succès:", info.response);
    }
  });
};

module.exports = { sendEmail };*/

