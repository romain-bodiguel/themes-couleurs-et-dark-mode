const message = {
    // Méthode dont le but est de créer un message reçu en argument et de l'afficher dans un élément donné.
    addMessageToElement: function(messageContent, parentElement) {

        // On crée un nouvel élément P pour afficher une erreur.
        const newErrorMessage = document.createElement('p');

        // On lui attribue une classe afin de le styler correctement.
        newErrorMessage.classList.add('message');

        // On ajoute un contenu
        newErrorMessage.textContent = messageContent;
     
        // On ajoute l'erreur fraichement crée au parent
        parentElement.prepend(newErrorMessage);
    },

    // Méthode qui supprime les messages d'erreur d'un élément donné
    removeOldMessages: function(parentElement) {

        // On sélectionne tous les éléments du parent donné qui ont la classe message
        const oldMessages = parentElement.querySelectorAll('.message');

        // On parcourt tous les messages pour les supprimer
        for (const currentMessage of oldMessages) {
            currentMessage.remove();
        }

    }
}