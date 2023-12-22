// Importation du module express
const express = require('express');

// Importation des contrôleurs
const registerController = require('../Controllers/cincription');
const registerControllerPage = require('../Controllers/cinscriptionPage');

// Création d'un nouveau routeur express pour gérer les routes d'inscription
const registerRouter = express.Router();

// Définition de la route POST pour l'inscription, qui utilise le contrôleur d'inscription
registerRouter.post('/', registerController);

// Définition de la route GET pour l'inscription, qui utilise le contrôleur de la page d'inscription
registerRouter.get('/', registerControllerPage);

// Exportation du routeur d'inscription
module.exports = registerRouter;