// Définition du contrôleur de déconnexion
const deconnexionController = (req, res) => {
  try {
    // Suppression de l'ID de l'utilisateur de la session
    delete req.session.id_User;

    // Affichage d'un message dans la console indiquant que l'utilisateur est déconnecté
    console.log('Vous êtes déconnecté', req.session.id_User);

    // Redirection de l'utilisateur vers la page de connexion
    res.redirect('/connexion');
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
    console.error('Error during logout:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Exportation du contrôleur de déconnexion
module.exports = deconnexionController;