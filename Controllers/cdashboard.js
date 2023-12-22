// Importation du client Prisma pour interagir avec la base de données
const { PrismaClient } = require('@prisma/client');

// Création d'une nouvelle instance de PrismaClient
const prisma = new PrismaClient();

// Définition du contrôleur du tableau de bord
const dashboardController = async (req, res) => {
  try {
    // Récupération de tous les groupes avec leurs membres et rappels
    const allGroupsWithMembersAndReminders = await prisma.groups.findMany({
      include: {
        members: { // Inclut les membres du groupe
          include: {
            userb: true, // Inclut les détails de l'utilisateur pour chaque membre
          },
        },
        Reminds: true, // Inclut les rappels du groupe
      },
    });

    // Affichage des groupes avec leurs membres et rappels dans la console
    console.log('All Groups with Members and Reminders:', allGroupsWithMembersAndReminders);

    // Formatage des groupes pour ne garder que les informations nécessaires
    const formattedGroups = allGroupsWithMembersAndReminders.map(group => {
      // Pour chaque groupe, création d'une liste de membres avec seulement le nom
      const members = group.members.map(member => ({ name: member.userb.name }));

      // Pour chaque groupe, création d'une liste de rappels avec seulement les informations nécessaires
      const reminders = group.Reminds.map(reminder => ({
        id_Remind: reminder.id_Remind,
        name: reminder.name,
        bio: reminder.bio,
        limit_date: reminder.limit_date,
        color: reminder.color,
      }));

      // Retourne le groupe formaté
      return { id_Group: group.id_Group, name: group.name, members, Reminds: reminders };
    });

    // Affichage des groupes formatés dans la console
    console.log('Formatted Groups:', formattedGroups);

    // Rendu de la page du tableau de bord avec les groupes formatés
    res.render('dashboard', { groups: formattedGroups });
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
    console.error('Error fetching groups:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Exportation du contrôleur du tableau de bord
module.exports = dashboardController;