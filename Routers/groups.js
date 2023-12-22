// Importation des modules nécessaires
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// Importation des contrôleurs
const createGroupController = require('../Controllers/ccreateG');
const groupsController = require('../Controllers/cgroup');

// Création d'une nouvelle instance de PrismaClient pour interagir avec la base de données
const prisma = new PrismaClient();

// Création d'un nouveau routeur express pour gérer les routes de groupe
const groupsRouter = express.Router();

// Définition de la route POST pour créer un groupe, qui utilise le contrôleur de création de groupe
groupsRouter.post('/createGroup', createGroupController);

// Définition de la route GET pour récupérer les groupes, qui utilise le contrôleur de groupe
groupsRouter.get('/', groupsController);

// Exportation du routeur de groupe
module.exports = groupsRouter;