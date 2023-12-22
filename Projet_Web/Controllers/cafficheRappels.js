// Importation du client Prisma
const { PrismaClient } = require('@prisma/client');

// Création d'une nouvelle instance de PrismaClient
const prisma = new PrismaClient();

// Définition du contrôleur pour afficher un rappel
const printReminderController = async (req, res) => {
    try {
      // Récupération de l'ID du rappel à partir des paramètres de la requête
      const id = req.params.id;

      // Recherche du rappel dans la base de données à l'aide de Prisma
      const reminder = await prisma.reminds.findUnique({
        where: { id_Remind: Number(id) },
      });

      // Récupération de l'ID du groupe à partir de l'objet rappel
      const groupID = reminder.groupID;

      // Rendu de la page d'édition des rappels, en passant l'objet rappel et l'ID du groupe à votre modèle
      res.render('edit-reminders', { reminder, groupID });

      // Affichage de l'objet rappel dans la console
      console.log('reminder:', reminder);
    } catch (error) {
      // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
      console.error('Error rendering the edit reminder page:', error);
      res.status(500).send('Internal Server Error');
    }
};

// Exportation du contrôleur
module.exports = printReminderController;