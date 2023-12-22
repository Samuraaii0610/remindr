// Importation du module bcrypt pour le hachage des mots de passe
const bcrypt = require('bcrypt');

// Importation du client Prisma pour interagir avec la base de données
const { PrismaClient } = require('@prisma/client');

// Création d'une nouvelle instance de PrismaClient
const prisma = new PrismaClient();

// Définition du contrôleur d'inscription
const registerController = async (req, res) => {
  // Récupération du nom, du prénom, de l'email et du mot de passe à partir du corps de la requête
  const { name, surname, email, mdp } = req.body;

  // Si le mot de passe n'est pas fourni, renvoie une erreur
  if (!mdp) {
    return res.status(400).json({ error: 'Le mot de passe est requis.' });
  }

  try {
    // Création d'un nouvel utilisateur avec le mot de passe haché
    const newUser = await prisma.users.create({
      data: {
        name: name,
        surname: surname,
        email: email,
        mdp: await bcrypt.hash(mdp, 10), // Hachage du mot de passe avec un sel de 10 tours
      },
    });

    // Affichage de l'utilisateur enregistré dans la console
    console.log('Utilisateur enregistré:', newUser);

    // Redirection vers le tableau de bord après l'inscription
    res.redirect('/dashboard');
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).json({ error: 'Erreur lors de l\'inscription. Veuillez réessayer plus tard.' });
  }
};

// Exportation du contrôleur d'inscription
module.exports = registerController;