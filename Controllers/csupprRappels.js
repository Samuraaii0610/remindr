// Importation du client Prisma pour interagir avec la base de données
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Définition du contrôleur pour supprimer un rappel
const deleteReminderController = async (req, res) => {
    try {
      // Récupération de l'ID du rappel à partir des paramètres de la requête
      const id = req.params.id;

      // Suppression du rappel correspondant à l'ID
      await prisma.reminds.delete({
        where: { id_Remind: Number(id) },
      });

      // Redirection vers le tableau de bord après la suppression
      res.redirect('/dashboard');
    } catch (error) {
      // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
      console.error('Erreur lors de la suppression du rappel:', error);
      res.status(500).send('Erreur interne du serveur');
    }
};

// Exportation du contrôleur de suppression de rappel
module.exports = deleteReminderController;