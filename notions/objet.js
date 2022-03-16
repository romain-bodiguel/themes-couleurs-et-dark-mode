// On crée une variable "personne" qui contient un objet
const personne = {
    // Propriété => variable dans un objet
    // Un objet peut contenir des propriétés identifiées par une clé
    prenom: 'Wahib',
    nom: 'Jouidir',



    // Méthode => fonction rangée dans un objet
    // Un objet peut aussi contenir des fonctions appelées méthodes identifiées par une clé
    saluer: function() {
        console.log('Salut !');
    },

};

// Pour exécuter une méthode, on la préfixe toujours de l'objet dans laquelle elle est rangée
personne.saluer();