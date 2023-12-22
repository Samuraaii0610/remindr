// Importation du client Prisma pour interagir avec la base de données
const { PrismaClient } = require('@prisma/client');

// Création d'une nouvelle instance de PrismaClient
const prisma = new PrismaClient();

// Définition du contrôleur pour éditer un rappel
const editReminderController = async (req, res) => {
  try {
    // Récupération de l'ID du rappel et du groupe à partir des paramètres de la requête
    const reminderId = req.params.id_Remind;
    const groupID = req.params.groupID;

    // Récupération du titre, de la description, de la date limite et de la couleur à partir du corps de la requête
    const { title, description, limitDate, color } = req.body;

    // Mise à jour du rappel dans la base de données
    await prisma.reminds.update({
      where: { id_Remind: Number(reminderId) },
      data: { 
        name: title, // Utilisation de 'name' au lieu de 'title'
        bio: description, // Supposition que 'bio' est l'équivalent de 'description'
        end_date: new Date(limitDate), // Conversion de la chaîne en objet Date
        color 
      },
    });

    // Redirection vers le tableau de bord après la mise à jour
    res.redirect('/dashboard');
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
    console.error('Error updating the reminder:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Exportation du contrôleur d'édition de rappel
module.exports = editReminderController;