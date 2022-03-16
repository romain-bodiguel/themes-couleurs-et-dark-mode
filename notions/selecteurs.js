// Au démarrage de la page, on sélectionne le titre en utilisant son ID
// getElementById permet de récupérer UN ELEMENT d'après son ID.
const mainTitle = document.getElementById('main__title');

// On peut aussi récupérer des éléments d'après leur classe
//getElementsByClassName renvoie TOUJOURS un TABLEAU d'éléments (meme s'il ne trouve rien ou un seul élément)
const menuLinks = document.getElementsByClassName('menu__item');

// On peut aussi récupérer des éléments d'après leur balise
// getElementsByTagName renvoie TOUJOURS un TABLEAU d'éléments (meme s'il n'en trouve qu'un ou aucun)
const h1 = document.getElementsByTagName('h1');

// On peut aussi utiliser des sélecteurs CSS pour sélectionner un élément sur la page.

// Sélectionner le premier élément du menu
// querySelector attend un SELECTEUR CSS en argument et renvoie TOUJOURS UN SEUL ELEMENT, le premier trouvé sur la page
const firstMenuElement = document.querySelector(".submenu .submenu__item:first-child");

// Si on veut récupérer tous les éléments du menu
// querySelectorAll agit comme querySelector sauf qui renvoie TOUJOURS un TABLEAU D'ELEMENTS
const menuElements = document.querySelectorAll(".submenu .submenu__item");



// On peut modifier certaines caractéristiques des éléments
// Par exemple: le contenu de la balise

// mainTitle.textContent = "C'est les vacances !";
