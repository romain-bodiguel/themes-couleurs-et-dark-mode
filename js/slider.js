const slider = {
    // On définit une propriété qui sert à stocker la position de l'image affichée. Au chargement de la page, c'est la première image donc 0.
    currentPosition: 0,
    // On crée un tableau qui contiendra toutes les images du slider
    // Chaque image est identifiée par un index : la première est l'image 0
    images: [],


    // Méthode qui initialise les propriétés du module et pose les écouteurs
    init: function() {
        // On commence par générer les images du slider
        slider.generateSliderImages();

        // On sélectionne toutes les images du slider et on les met dans un tableau qui est une propriété du module. Il peut donc etre réutilisé partout dans le module.
        slider.images = document.querySelectorAll('.slider__img');

        // On sélectionne les fleches pour poser des écouteurs
        const sliderButtons = document.querySelectorAll('.slider__btn');

        // La fleche "précedent" est la première du tableau : 
        sliderButtons[0].addEventListener('click', slider.handlePrevClick);
        // La fleche "suivant" est la 2nde 
        sliderButtons[1].addEventListener('click', slider.handleNextClick);

    },
    // Méthode qui appelée quand on clique sur le bouton suivant
    handleNextClick: function() {
        // On détermine la position de la prochaine slide
        let newPosition = slider.currentPosition + 1;

        // Si la nouvelle position est supérieure à la taille du tableau, on revient à la première slide
        if(newPosition > slider.images.length - 1) {
            newPosition = 0;
        }

        // On va  à la slide suivante : position actuelle + 1
        slider.goToSlide(newPosition);

    },
    //
    handlePrevClick: function() {

        // On détermine la position de la slide précédente
        let newPosition = slider.currentPosition - 1;

        // Si la nouvelle position est inférieure à 0, c'est une slide qui n'existe pas. On passe à la dernière du tableau.
        if(newPosition < 0) {

            newPosition = slider.images.length - 1;
        }


        // On va à la slide précédente : position actuelle  - 1
        slider.goToSlide(newPosition);


    },
    // Méthode qui permet d'afficher une slide donnée en paramètre
    goToSlide: function(newPosition) {

        // On récupère la slide affichée actuellement en utilisant les deux propriétés de notre objet : le tableau de toutes les slides ainsi que la position de la slide actuellement affichée
        const currentSlide = slider.images[slider.currentPosition];
        
        // On retire la classe "current" à la slide pour la cacher
        currentSlide.classList.remove('slider__img--current');

        // On récupère la nouvelle slide à afficher d'après la position qui nous est transmise
        const newSlide = slider.images[newPosition];

        // On ajoute la classe "current" à  la nouvelle slide à afficher
        newSlide.classList.add('slider__img--current');

        // On met à jour la position de la slide courante
        slider.currentPosition = newPosition;


    },
    // Fonction qui ajoute dans le DOM toutes les images du slider
    generateSliderImages: function() {

        // Ce tableau liste toutes les images à afficher dans le slider. Il va servir de source à celui-ci.
        const sliderImages = [
            'ocean.jpg',
            'ski.jpg',
            'city.jpg',
            'apollo.jpg'
        ];

        // On parcourt le tableau des images pour les générer et les insérer dans le DOM.
        for (const currentImage of sliderImages) {
            
            // On crée une nouvelle image avec la fonction createElement. Elle attend le nom d'une balise en argument
            const newImageElement = document.createElement('img');
        
            // On ajoute le chemin vers l'image dans l'attribut src
            newImageElement.src = "img/" + currentImage;
        
            // On ajoute des classes à notre image
            newImageElement.classList.add('slider__img');
        
            newImageElement.alt = "Attribut alt de l'image " + currentImage ;
        
            // On sélectionne le parent
            const sliderElement = document.querySelector('.slider');
        
            // On ajoute le nouvel élément directement en début de la balise parente (avant ses autres enfants)
            sliderElement.prepend(newImageElement);

        }

        // Une fois que toutes les images sont insérées, on veut afficher la première.
        // querySelector renvoie toujours le 1er élément trouvé qui correspond au sélecteur CSS. Donc ici, la première image de notre slider.
        const firstSliderImage = document.querySelector('.slider img');
        

        // On ajoute la classe active à notre image
        firstSliderImage.classList.add('slider__img--current');



    }
}

