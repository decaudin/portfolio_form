const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:3000"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurer le transporteur de courrier
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Route pour gérer l'envoi de l'e-mail
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "email",
    to: process.env.GMAIL_USER,
    subject: "Nouveau message de contact",
    html: `<p>Nom: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Erreur lors de l'envoi de l'e-mail:", error);
      res.status(500).send("Erreur lors de l'envoi de l'e-mail");
    } else {
      console.log("E-mail envoyé avec succès:", info.response);
      res.status(200).send("E-mail envoyé avec succès");
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});