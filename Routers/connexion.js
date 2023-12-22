// Importation du module express
const express = require('express');

// Importation du contrôleur de connexion
const connexionController = require('../Controllers/cconnexion');

// Création d'un nouveau routeur express pour gérer les routes de connexion
const connexionRouter = express.Router();

// Définition de la route POST pour la connexion, qui utilise le contrôleur de connexion
connexionRouter.post('/', connexionController);

// Définition de la route GET pour la connexion, qui rend la page de connexion et affiche un message dans la console
connexionRouter.get('/', async (req, res) => {
  res.render('connexion');
  console.log('Vous êtes sur la page de connexion')
});

// Exportation du routeur de connexion
module.exports = connexionRouter;