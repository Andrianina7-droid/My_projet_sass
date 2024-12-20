const burgerMenu = document.getElementById('burger-menu');
const containerLeft = document.getElementById('container-left');
const closeBtn = document.getElementById('close-btn');

// Afficher le menu
burgerMenu.addEventListener('click', () => {
    containerLeft.classList.add('active');
});

// Cacher le menu
closeBtn.addEventListener('click', () => {
    containerLeft.classList.remove('active');
});