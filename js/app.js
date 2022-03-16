// Objet App : "module" qui gère toute l'application en appelant d'autres "modules"
const app = {

    // La méthode init est appelée par l'écouteur d'événement lorsque la page est totalement chargée.
    // On va mettre dedans tout le code à exécuter quand la page est chargée (très souvent ce sera des écouteurs d'événements)
    init: function() {
        // Dés le chargement de la page, on génère les images du slider
        slider.init();

        // Au chargement de la page on pose aussi les écouteurs d'événements dont on va avoir besoin
        // Pour poser les écouteurs de la newsletter, on appelle sa méthode init 
        newsletter.init();

        // On pose les écouteurs pour les destinations
        destinations.init();

        // On démarre aussi le module theme
        theme.init();
       
    }
}



// On attend le chargement complet de la  page pour lancer notre code.
document.addEventListener('DOMContentLoaded', app.init);
