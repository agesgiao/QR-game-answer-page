// script.js
document.addEventListener('DOMContentLoaded', function() {
    var openButton = document.querySelector('.open');
    var closeButton = document.querySelector('.close');
    var menu = document.querySelector('.menu');

    openButton.addEventListener('click', function() {
        menu.style.display = 'block';
        openButton.style.display = 'none';
        closeButton.style.display = 'inline';
    });

    closeButton.addEventListener('click', function() {
        menu.style.display = 'none';
        openButton.style.display = 'inline';
        closeButton.style.display = 'none';
		
		
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu-bar');
    const upButton = document.querySelector('.scroll-button.up');
    const downButton = document.querySelector('.scroll-button.down');

    upButton.addEventListener('click', function() {
        menuBar.scrollBy({ top: -100, behavior: 'smooth' });
    });

    downButton.addEventListener('click', function() {
        menuBar.scrollBy({ top: 100, behavior: 'smooth' });
    });
});



