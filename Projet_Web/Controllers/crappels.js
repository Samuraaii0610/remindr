// Définition du contrôleur pour la page de rappels
const remindersController = (req, res) => {
  try {
    // Récupération de l'ID du groupe à partir des paramètres de la requête
    const groupId = req.params.groupId;

    // Rendu de la page 'reminders' avec l'ID du groupe
    res.render('reminders', { groupId: groupId });

    // Affichage d'un message dans la console indiquant que l'utilisateur est sur la page de rappels
    console.log('Vous êtes sur la page de rappels pour le groupe:', groupId);
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
    console.error('Error rendering the reminders page:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Exportation du contrôleur de la page de rappels
module.exports = remindersController;