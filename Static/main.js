// Ajout d'un écouteur d'événement pour exécuter le code une fois que le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
  // Sélection de tous les boutons d'édition de rappel
  const editButtons = document.querySelectorAll('.edit-reminder');
  // Sélection de tous les boutons de suppression de rappel
  const deleteButtons = document.querySelectorAll('.delete-reminder');

  // Pour chaque bouton d'édition, ajout d'un écouteur d'événement de clic
  editButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Récupération de l'ID du rappel à partir des attributs de données du bouton
      const id = event.target.dataset.id;
      // Redirection vers la page d'édition du rappel correspondant
      window.location.href = `/reminders/${id}/edit`;
    });
  });

  // Pour chaque bouton de suppression, ajout d'un écouteur d'événement de clic
  deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Récupération de l'ID du rappel à partir des attributs de données du bouton
      const id = event.target.dataset.id;
      // Si l'utilisateur confirme la suppression
      if (confirm('Êtes-vous sûr de vouloir supprimer ce rappel ?')) {
        // Envoi d'une requête DELETE au serveur pour supprimer le rappel
        fetch(`/reminders/${id}`, {
          method: 'DELETE',
        }).then(() => {
          // Rechargement de la page pour afficher les changements
          window.location.reload();
        });
      }
    });
  });
});