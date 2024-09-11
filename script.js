//constantes
const menu = document.getElementById("menu");
const iconClose = document.getElementById("iconClose");
const iconMenu = document.getElementById("iconMenu");

//Variables
let menuIsOpen = false;

function toggleMenu() {
    menuIsOpen = !menuIsOpen;

    if (menuIsOpen) {
        iconClose.classList.remove("opacity-0", "rotate-180");
        iconClose.classList.add("opacity-100", "rotate-0");

        iconMenu.classList.remove("opacity-100", "rotate-0");
        iconMenu.classList.add("opacity-0", "rotate-180");

        menu.classList.remove("clipPath-Desactive");
        menu.classList.add("clipPath-Active");

        document.addEventListener('', () => {
            toggleMenu();
        })
    } else {
        iconClose.classList.remove("opacity-100", "rotate-0");
        iconClose.classList.add("opacity-0", "rotate-180");

        iconMenu.classList.remove("opacity-0", "rotate-180");
        iconMenu.classList.add("opacity-100", "rotate-0");

        menu.classList.remove("clipPath-Active");
        menu.classList.add("clipPath-Desactive");
    }
}
