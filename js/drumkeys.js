let keypressed = document.querySelector('.keyA');

const body = document.querySelector('body');
body.addEventListener('keydown', () => {
    keypressed.classList.add('active');
});

body.addEventListener('keyup', () => {
    keypressed.classList.remove('active');
});