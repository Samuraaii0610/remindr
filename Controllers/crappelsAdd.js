// Importation du client Prisma pour interagir avec la base de données
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Définition du contrôleur pour ajouter un rappel
const addReminderController = async (req, res) => {
  // Récupération des données du rappel à partir du corps de la requête
  const { id_Remind: remindId, title: remindTitle, description: remindBio, limitDate, color } = req.body;
  // Récupération de l'ID du groupe à partir des paramètres de la requête
  const groupId = parseInt(req.params.groupId, 10);
  const reminderData = req.body;

  try {
    // Récupération du groupe et de ses rappels associés
    const existingGroup = await prisma.groups.findUnique({
      where: { id_Group: groupId },
      include: { Reminds: true },
    });

    // Si le groupe n'existe pas, renvoie une erreur
    if (!existingGroup) {
      return res.send('Le groupe n\'existe pas.');
    }

    // Si la date limite n'est pas fournie ou n'est pas une date valide, renvoie une erreur
    if (!reminderData.limitDate || isNaN(new Date(reminderData.limitDate))) {
      return res.status(400).send('La date limite est invalide.');
    }

    // Création d'un nouveau rappel
    const newReminder = await prisma.reminds.create({
      data: {
        id_Remind: remindId,
        name: remindTitle,
        bio: remindBio,
        end_date: new Date(limitDate),
        color: color,
        group: {
          connect: { id_Group: groupId },
        }
      },
    });

    // Redirection vers le tableau de bord après la création du rappel
    res.redirect('/dashboard');
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
    console.error('Erreur lors de la création du rappel :', error);
    res.status(500).send('Erreur lors de la création du rappel.');
  }
};

// Exportation du contrôleur d'ajout de rappel
module.exports = addReminderController;