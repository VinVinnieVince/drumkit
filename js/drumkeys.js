let keypressed = document.querySelector('.keyA');

const body = document.querySelector('body');
body.addEventListener('keydown', () => {
    console.log
    keypressed.classList.add('active');
});