// Définition du contrôleur pour la page de création de groupe
const groupsController = (req, res) => {
  try {
    // Rendu de la page 'groups'
    res.render('groups');

    // Affichage d'un message dans la console indiquant que l'utilisateur est sur la page de création de groupe
    console.log('Vous êtes sur la page de création de groupe');
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
    console.error('Error rendering the groups page:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Exportation du contrôleur de la page de création de groupe
module.exports = groupsController;