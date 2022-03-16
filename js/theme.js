const theme = {
    init: function() {
        //je sélectionne le bouton lune
        const themeButton = document.querySelector('button#theme-switch');

        // j'ajoute un écouteur d'évenement sur mes boutons de changement de thème et couleur
        themeButton.addEventListener('click', theme.handleClickThemeButton);

        // j'ajoute également un écouteur d'évenement sur les boutons de couleurs de thème
        const themeColorButton = document.querySelectorAll('.theme-button');

        // je crée une boucle pour sélectionner chaque bouton de couleur un par un
        for (const colorButton of themeColorButton) {
            colorButton.addEventListener('click', theme.handleClickColorButton);   
        }

        // Chargement de la page on veut vérifier qu'un thème n'a pas été précédemment sauvegardé et l'afficher si c'est le cas
        theme.getStoredTheme();
    },

    // méthode qui est appelée quand on clique sur le bouton de changement de thème
    handleClickThemeButton: function(event) {
        // j'annule le rechargement de la page au clic
        event.preventDefault();

        // je sélectionne l'élément auquel attribuer une classe theme-dark
        const darkThemeElement = document.body;
        darkThemeElement.classList.toggle('theme-dark');

        // Maintenant sauvegarde le choix du theme dans localStorage
        theme.saveToLocalStorage();
    },

    handleClickColorButton: function(event) {
        // j'annule le rechargement de la page au clic
        event.preventDefault();

        // je sélectionne l'élément sur lequel je clique avec currentTarget
        const currentColorButton = event.currentTarget;

        // je récupère l'id de l'élément sélectionné
        const idCurrentColorButton = currentColorButton.getAttribute('id');

        // j'appelle la fonction qui va venir supprimer la classe précédemment ajoutée
        theme.removeOldColorThemeClass();

        // j'appelle la fonction où je leur applique la classe de couleur appelée
        theme.addColorTheme(idCurrentColorButton);

        // j'appelle la fonction où je change la couleur du logo
        theme.addColorLogo(idCurrentColorButton);
    },

    addColorTheme: function(color) {

        // je sélectionne l'élément auxquel attribuer leur classe de couleur
        const colorThemeElement = document.querySelector('body');
        colorThemeElement.classList.add(color);

        // je vais également ajouter la classe dans le localstorage
        const whichColorJSON = JSON.stringify(color);        
        localStorage.setItem('color-theme', whichColorJSON);
    },

    addColorLogo: function(color) {

        // je sélectionne l'élément auxquel attribuer leur classe de couleur
        const colorThemeLogo = document.querySelector('.logo__image');

        // je peux modifier le nom de sa source en la concaténant
        colorThemeLogo.src='img/logo-'+color+'.png';

        // je vais également ajouter la couleur du logo dans le localstorage
        const whichColorLogoJSON = JSON.stringify(color);
        localStorage.setItem('color-theme-on-logo', whichColorLogoJSON);
    },

    removeOldColorThemeClass: function() {
        // je sélectionne l'élément duquel je veux supprimer la classe de couleur
        const removeColorThemeElement = document.body;

        // je vérifie s'il possède déjà une classe de thème de couleur
        const storedColorTheme = localStorage.getItem('color-theme');
        const whichColor = JSON.parse(storedColorTheme);

        // je sélectionne les classes du body
        removeColorThemeElement.classList.remove(whichColor);
    },

    // Méthode qui sauvegarde le thème actuel choisi dans localStorage
    saveToLocalStorage: function() {

        // On vérifie les classes du body pour savoir si on est en theme dark ou non.
        // isDark sera égale à true si c'est le cas.
        const isDark = document.body.classList.contains('theme-dark');

        // On transforme le booléen stocké dans isDark au format JSON avec stringify
        const isDarkJSON = JSON.stringify(isDark);

        // On sauvegarde le theme dans localstorage
        localStorage.setItem('darkMode', isDarkJSON);
    },

    // Méthode qui récupère le thème stocké en localStorage et l'applique
    getStoredTheme: function() {

        // On récupère le theme depuis le localstorage
        const storedTheme = localStorage.getItem('darkMode');
        const storedColorTheme = localStorage.getItem('color-theme');

        // On retranscrit l'information de JSON vers JS avec parse.
        const isDark = JSON.parse(storedTheme);
        const whichColor = JSON.parse(storedColorTheme);

        // Si isDark contient true, on applique la classe theme-dark
        if(isDark) {
            // On ajoute la classe theme-dark
            document.body.classList.add('theme-dark');
        }

        // on ajoute la couleur du thème précédemment chargé au site
        document.body.classList.add(whichColor);

        // on ajoute la couleur du thème précédemment chargé au logo
        const colorThemeLogo = document.querySelector('.logo__image');
        colorThemeLogo.src='img/logo-'+whichColor+'.png';
    }
}