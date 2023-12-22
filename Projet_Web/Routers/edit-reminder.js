// Importation du module express
const express = require('express');

// Importation des contrôleurs
const printReminderController = require('../Controllers/cafficheRappels');
const editReminderController = require('../Controllers/ceditRappels');
const deleteReminderController = require('../Controllers/csupprRappels');

// Création d'un nouveau routeur express pour gérer les routes d'édition de rappel
const editReminderRouter = express.Router();

// Définition de la route GET pour afficher le formulaire d'édition de rappel, qui utilise le contrôleur d'affichage de rappel
editReminderRouter.get('/reminders/:id/edit', printReminderController);

// Définition de la route POST pour soumettre le formulaire d'édition de rappel, qui utilise le contrôleur d'édition de rappel
editReminderRouter.post('/dashboard/groups/:groupID/reminders/:id_Remind/edit', editReminderController);

// Définition de la route DELETE pour supprimer un rappel, qui utilise le contrôleur de suppression de rappel
editReminderRouter.delete('/reminders/:id', deleteReminderController);

// Exportation du routeur d'édition de rappel
module.exports = editReminderRouter;