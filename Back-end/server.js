const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware pour gérer les CORS

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:3000"
  );
  res.header("Access-Control-Allow-Methods", "POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

const port = process.env.PORT || 3001;


// Middleware pour analyser les données des requêtes

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Configuration du transporteur de courrier

const transporter = nodemailer.createTransport({
  host: 'smtp.sfr.fr',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SFR_USER,
    pass: process.env.SFR_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Route pour gérer l'envoi de l'e-mail avec validation et nettoyage

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  try {

   // Validation des données
   
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    // Nettoyage des données (exemple simple)
  
    const cleanedName = sanitizeName(name);
    const cleanedEmail = sanitizeEmail(email);
    const cleanedMessage = sanitizeMessage(message);

    // Configuration de l'e-mail avec les données nettoyées

    const mailOptions = {
      from: process.env.SFR_USER,
      to: process.env.SFR_USER,
      subject: "Nouveau message de contact",
      html: `<p>Nom: ${cleanedName}</p><p>Email: ${cleanedEmail}</p><p>Message: ${cleanedMessage}</p>`,
    };

    // Envoi de l'e-mail

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Erreur lors de l'envoi de l'e-mail:", error);
        res.status(500).send("Erreur lors de l'envoi de l'e-mail");
      } else {
        console.log("E-mail envoyé avec succès:", info.response);
        res.status(200).send("E-mail envoyé avec succès");
      }
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Fonctions de nettoyage

const sanitizeName = (name) => {
  const cleanedName = name.trim();
  const onlyLettersAndSpaces = /^[A-Za-z\s]+$/; // Regex pour vérifier les lettres et les espaces
  if (!onlyLettersAndSpaces.test(cleanedName)) {
    throw new Error('Le nom doit contenir uniquement des lettres et des espaces.');
  }
  return cleanedName;
}

const sanitizeEmail = (email) => {
  const cleanedEmail = email.trim();
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour vérifier le format de l'e-mail
  if (!emailFormat.test(cleanedEmail)) {
    throw new Error('Format d\'e-mail invalide');
  }
  return cleanedEmail;
}

const sanitizeMessage = (message) => {
  const cleanedMessage = message.trim();
  const sanitizedMessage = cleanedMessage.replace(/<[^>]+>/g, '');
  return sanitizedMessage;
}


// Démarrage du serveur sur le port spécifié

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});

/*const express = require("express");
const corsMiddleware = require("./middlewares/cors");
const requestParserMiddleware = require("./middlewares/requestParser");
const emailRoutes = require("./routes/email");
require('dotenv').config();

const app = express();

app.use(corsMiddleware);
app.use(requestParserMiddleware);
app.use("/send-email", emailRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});

// Stockage des variables d'environnement
const sfrUser = process.env.SFR_USER;
const sfrPass = process.env.SFR_PASS;

module.exports = { port, sfrUser, sfrPass };*/