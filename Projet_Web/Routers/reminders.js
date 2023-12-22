// Importation du module express
const express = require('express');

// Importation des contrôleurs
const addReminderController = require('../Controllers/crappelsAdd');
const remindersController = require('../Controllers/crappels');

// Création d'un nouveau routeur express pour gérer les routes de rappel
const remindersRouter = express.Router();

// Définition de la route POST pour ajouter un rappel, qui utilise le contrôleur d'ajout de rappel
remindersRouter.post('/dashboard/groups/:groupId/reminders/add', addReminderController);

// Définition de la route GET pour récupérer les rappels, qui utilise le contrôleur de rappel
remindersRouter.get('/dashboard/groups/:groupId/reminders', remindersController);

// Exportation du routeur de rappel
module.exports = remindersRouter;