// Importation des modules nécessaires
const express = require('express');
const path = require('path');
var Handlebars = require('handlebars');
var moment = require('moment');

// Importation des contrôleurs
const dashboardController = require('../Controllers/cdashboard');
const deconnexionController = require('../Controllers/cdeconnexion');

// Importation du middleware d'authentification
const middlewarePath = path.join(__dirname, '..', 'Middleware', 'authMiddleware.js');
const isAuthenticated = require(middlewarePath);

// Création d'un nouveau routeur express pour gérer les routes du tableau de bord
const dashboardRouter = express.Router();

// Enregistrement de l'aide 'isPastDate' pour Handlebars
Handlebars.registerHelper('isPastDate', function(date) {
  if (!date) {
    return false;
  }
  var now = new Date();
  var inputDate = new Date(date);
  return inputDate < now;
});

// Enregistrement de l'aide 'formatDate' pour Handlebars
Handlebars.registerHelper('formatDate', function(date) {
  return moment(date).format('DD/MM/YYYY');
});

// Application du middleware d'authentification avant toutes les routes du tableau de bord
dashboardRouter.use(isAuthenticated);

// Définition de la route GET pour le tableau de bord, qui utilise le contrôleur du tableau de bord
dashboardRouter.get('/', isAuthenticated, dashboardController);

// Définition de la route GET pour la déconnexion, qui utilise le contrôleur de déconnexion
dashboardRouter.get('/deconnexion', deconnexionController);

// Exportation du routeur du tableau de bord
module.exports = dashboardRouter;