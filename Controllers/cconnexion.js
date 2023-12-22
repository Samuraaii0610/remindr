// Importation du module bcrypt pour le hachage des mots de passe
const bcrypt = require('bcrypt'); 

// Importation du client Prisma pour interagir avec la base de données
const { PrismaClient } = require('@prisma/client');

// Création d'une nouvelle instance de PrismaClient
const prisma = new PrismaClient();

// Définition du contrôleur de connexion
const connexionController = async (req, res) => {
  try {
    // Récupération de l'email et du mot de passe à partir du corps de la requête
    const { email, mdp } = req.body;

    // Recherche de l'utilisateur existant dans la base de données à l'aide de Prisma
    const existingUser = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    // Si l'utilisateur n'existe pas, renvoie une erreur 401
    if (!existingUser) {
      return res.status(401).json({ error: 'Adresse e-mail incorrecte.' });
    }

    // Comparaison du mot de passe fourni avec le mot de passe haché stocké dans la base de données
    const passwordMatch = await bcrypt.compare(mdp, existingUser.mdp);

    // Si les mots de passe ne correspondent pas, renvoie une erreur 402
    if (!passwordMatch) {
      return res.status(402).json({ error: 'Mot de passe incorrect.' });
    }

    // Si l'utilisateur existe et que le mot de passe est correct, stocke l'ID de l'utilisateur dans la session
    req.session.id_User = existingUser.id_User;

    // Redirige l'utilisateur vers le tableau de bord
    res.redirect('/dashboard');
  } catch (error) {
    // En cas d'erreur, affiche l'erreur dans la console et renvoie une erreur 500
    res.status(500).send('Internal Server Error');
  }
};

// Exportation du contrôleur de connexion
module.exports = connexionController;