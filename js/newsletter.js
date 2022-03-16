// Cet objet permet de gérer toutes les fonctionnalités liées à la newsletter
const newsletter = {
    // Méthode qui pose les écouteurs pour le module newsletter
    init: function() {
        // On a besoin de surveiller les clics sur le lien newsletter du menu pour afficher l'encart de newsletter
        const newsletterLink = document.querySelector('#newsletter__link');
        newsletterLink.addEventListener('click', newsletter.handleNewsletterPanel);

        // On va serveiller les clics sur le bouton de fermeture de l'encart de newsletter
        const closeButton = document.querySelector('.newsletter__close');
        closeButton.addEventListener('click', newsletter.handleNewsletterPanel);

        // On doit surveiller la soumission du formulaire par l'utilisateur
        const formElement = document.querySelector('.newsletter form');
        formElement.addEventListener('submit', newsletter.handleNewsletterSubmit);

    },

    // Méthode qui permet de savoir si un email donné contient un domaine interdit ou non.
    // Elle renvoie true si un domaine interdit est trouvé, false sinon
    isForbbidenEmail: function(email) {
        // tableau contenant tous les domaines interdits
        const forbiddenDomains = [
            '@yopmail.com',
            '@yopmail.fr',
            '@yopmail.net',
            '@cool.fr.nf',
            '@jetable.fr.nf',
            '@courriel.fr.nf',
            '@moncourrier.fr.nf',
            '@monemail.fr.nf',
            '@monmail.fr.nf',
            '@hide.biz.st',
            '@mymail.infos.st',
        ];

        // On parcourt la liste des domains interdits
        for (const currentDomain of forbiddenDomains) {
            // Si l'email contient le domain qu'on est en train de tester, c'est que l'email est interdit, on retourne "true". Ce qui arrete la fonction et donc, la boucle. 
            if(email.includes(currentDomain)) {
                return true;
            }
        }
        
        // Si on arrive ici, c'est que tout le tableau a été parcouru et qu'aucun domain interdit n'a été trouvé. On peut donc renvoyer false.
        return false;
    },

    // Méthode qui gère la soumission du formulaire de newsletter
    handleNewsletterSubmit: function(event) {

        // Récupération de l'email entré par l'utilisateur
        const userEmail = document.querySelector('#subscriber-email').value;
        
        // On demande à la fonction isForbiddenEmail si l'email de l'utilisateur est interdit.
        const isForbidden = newsletter.isForbbidenEmail(userEmail);
    
        // Si c'est le cas on affiche un message d'erreur
        if(isForbidden) {
            
            // Comme l'adresse est interdite, on bloque le formulaire
            event.preventDefault();
    
  
            // On sélectionne l'élément qui va recevoir le message d'erreur
            const newsletterPanelElement = document.querySelector('.newsletter');
    
            // Avant d'afficher le message, on en profite pour supprimer les précédents
            message.removeOldMessages(newsletterPanelElement);

            // On délègue à notre module la responsabilité de créer et afficher un message dans l'élément voulu
            message.addMessageToElement('Les emails jetables sont interdits', newsletterPanelElement);
    

            // On vide le champ 
            document.querySelector('#subscriber-email').value = "";        
        }
    
    },

    // Fonction qui est appelée quand on clique sur le lien newsletter du menu ou sur le bouton de fermeture.
    // Elle permet d'ouvrir ou fermer le panel de newsletter
    handleNewsletterPanel: function(event){

        // On bloque le comportement par défaut du lien (c'est à dire aller sur l'url inscrite dans le href)
        event.preventDefault();

        // On veut afficher l'encart de newsletter, on doit donc le sélectionner
        const newsletterPanel = document.querySelector('.newsletter');

        // On ajoute ou retire la classe newsletter--on selon si elle est déjà présente ou non.
        newsletterPanel.classList.toggle('newsletter--on');
    }

    


}