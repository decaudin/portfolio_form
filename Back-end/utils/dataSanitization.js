/*const sanitizeName = (name) => {
    const cleanedName = name.trim();
    const onlyLettersAndSpaces = /^[A-Za-z\s]+$/; // Regex pour vérifier les lettres et les espaces
    if (!onlyLettersAndSpaces.test(cleanedName)) {
      return '';
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
  
  module.exports = { sanitizeName, sanitizeEmail, sanitizeMessage };
  */