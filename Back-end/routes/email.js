/*const express = require("express");
const { sendEmail } = require("../utils/emailService");
const { sanitizeName, sanitizeEmail, sanitizeMessage } = require("../utils/dataSanitization");
const { sfrUser } = require('../server');

const emailRoutes = express.Router();

emailRoutes.post("/", (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    const cleanedName = sanitizeName(name);
    const cleanedEmail = sanitizeEmail(email);
    const cleanedMessage = sanitizeMessage(message);

    const mailOptions = {
      from: sfrUser,
      to: sfrUser,
      subject: "Nouveau message de contact",
      html: `<p>Nom: ${cleanedName}</p><p>Email: ${cleanedEmail}</p><p>Message: ${cleanedMessage}</p>`,
    };

    sendEmail(mailOptions); // Utiliser la fonction pour envoyer l'e-mail

    res.status(200).send("E-mail envoyé avec succès");
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = emailRoutes;*/

