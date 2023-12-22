// Définition du contrôleur pour la page d'inscription
const registerControllerPage = (req, res) => {
  try {
    // Rendu de la page 'inscription'
    res.render('inscription');

    // Affichage d'un message dans la console indiquant que l'utilisateur est sur la page d'inscription
    console.log('Vous êtes sur la page d\'inscription');
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
    console.error('Error rendering the registration page:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Exportation du contrôleur de la page d'inscription
module.exports = registerControllerPage;