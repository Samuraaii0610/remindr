// Importation du client Prisma pour interagir avec la base de données
const { PrismaClient } = require('@prisma/client');

// Création d'une nouvelle instance de PrismaClient
const prisma = new PrismaClient();

// Définition du contrôleur pour créer un groupe
const createGroupController = async (req, res) => {
  try {
    // Récupération du nom du groupe et des noms d'utilisateur à partir du corps de la requête
    const { groupName, usernames } = req.body;

    // Vérification de l'existence du groupe dans la base de données
    const existingGroup = await prisma.groups.findUnique({
      where: { name: groupName },
    });

    // Si le groupe existe déjà, renvoie un message d'erreur
    if (existingGroup) {
      return res.send('Le nom du groupe existe déjà. Choisissez un autre nom.');
    }

    // Création d'un nouveau groupe
    const newGroup = await prisma.groups.create({
      data: { name: groupName },
    });

    // Récupération des utilisateurs par leur nom
    const users = await prisma.users.findMany({
      where: {
        name: {
          in: usernames.split(',').map(username => username.trim())
          // Convertit la chaîne en tableau de noms d'utilisateur en supprimant les espaces autour de chaque nom
        }
      }
    });

    // Si aucun utilisateur n'est trouvé, renvoie un message d'erreur
    if (users.length === 0) {
      return res.send('Aucun utilisateur trouvé avec les noms fournis.');
    }

    // Ajout de chaque utilisateur au groupe
    const promises = users.map((user) => {
      return prisma.belong.create({
        data: {
          userb: { connect: { id_User: user.id_User } },
          groupb: { connect: { id_Group: newGroup.id_Group } },
        },
      });
    });

    // Attente de l'achèvement de toutes les promesses
    await Promise.all(promises);

    // Création d'une liste des noms des utilisateurs ajoutés
    const userNamesAdded = users.map(user => user.name).join(', ');

    // Redirection vers le tableau de bord
    res.redirect('/dashboard');
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
    console.error('Erreur lors de l\'ajout des utilisateurs au groupe :', error);
    res.status(500).send('Internal Server Error');
  }
};

// Exportation du contrôleur de création de groupe
module.exports = createGroupController;