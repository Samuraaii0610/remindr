// Définition du middleware d'authentification
const isAuthenticated = (req, res, next) => {
  // Si la session existe et contient un ID utilisateur
  if (req.session && req.session.id_User) {
    // Affichage d'un message dans la console indiquant que le middleware d'authentification a réussi
    console.log('Middleware isAuthenticated passed');
    // Passage au middleware ou au gestionnaire de route suivant
    next();
  } else {
    // Affichage d'un message dans la console indiquant que le middleware d'authentification a échoué
    console.log('Middleware isAuthenticated failed');
    // Redirection vers la page de connexion
    res.redirect('/connexion');
  }
};

// Exportation du middleware d'authentification
module.exports = isAuthenticated;