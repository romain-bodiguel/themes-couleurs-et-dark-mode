// Objet qui gère les interactions avec la partie destinations du site
const destinations = {
    // Méthode appelée pour initialiser la partie destionations : poser les écouteurs d'événements
    init: function() {

        // On sélectionne tous les "coeurs" de la page
        const heartElements = document.querySelectorAll('.btn__like');

        // On veut poser un écouteur sur chacun des coeurs, donc on parcourt le tableau qui les contient
        for (const currentHeart of heartElements) {

            // Pour chaque coeur on pose un écouteur
            currentHeart.addEventListener('click', destinations.handleHeartClick);
            
        }

    }, 
    // Méthode qui est appelée quand on clique sur un coeur
    handleHeartClick: function(event){

       // On récupère le coeur qui a été la cible du clic 
       const currentHeart = event.currentTarget

       // On veut afficher un message d'erreur dans l'article qui contient le coeur. On utilise donc closest pour remonter au parent du coeur le plus proche qui correspond à un sélecteur donné
       const cardElement = currentHeart.closest('.card');
    

       //Avant d'afficher le message d'erreur, on supprime les messages précédents
       message.removeOldMessages(cardElement);
        
       // On ajoute le message d'erreur dans l'article parent
       message.addMessageToElement('Vous devez etre connecté pour gérer vos favoris', cardElement);


    }

} 