// Importation des modules nécessaires
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

// Importation des routeurs
const registerRouter = require('./Routers/register');
const connexionRouter = require('./Routers/connexion');
const dashboardRouter = require('./Routers/dashboard');
const groupsRouter = require('./Routers/groups');
const remindersRouter = require('./Routers/reminders');
const editReminderRouter = require('./Routers/edit-reminder');

// Création de l'application express
const app = express();
// Définition du port sur lequel l'application va écouter
const port = 8000;

// Configuration du moteur de templates Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'Views'));

// Utilisation de bodyParser pour analyser le corps des requêtes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration de la session
app.use(session({
  secret: '}L6^..L6N/Vb8a=5qivP_pk4?ns95[7A$7{B=4c3NH55Bc9(7Sz74RB~#e-w8,?M%vDWJV7Z53)s76@!aVinz5+WC;yG9R2;i:9BA5]xF@dU~gvn4Sr5h*u3t[FZ3',
  resave: false,
  saveUninitialized: true,
}));

// Configuration des routes
app.use('/inscription', registerRouter);
app.use('/connexion', connexionRouter);
app.use('/dashboard', dashboardRouter);
app.use('/groups', groupsRouter);
app.use('/', remindersRouter);
app.use('/', editReminderRouter);

// Configuration du dossier pour les fichiers statiques
app.use('/Static', express.static(path.join(__dirname, 'Static')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Views', 'index.html'));
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (!res.headersSent) {
    res.status(500).send('Something went wrong!');
  }
});

// Gestion des pages non trouvées
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});