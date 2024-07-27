let keyPressed = document.querySelector('.keyA');

const body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
    switch (e.key){
        case 'a':
            keyPressed = document.querySelector('.keyA');
            break;
        case 's':
            keyPressed = document.querySelector('.keyS');
            break;
        default:
            return;
    }
    keyPressed.classList.add('active');
});

body.addEventListener('keyup', (e) => {
    switch (e.key){
        case 'a':
            keyPressed = document.querySelector('.keyA');
            break;
        case 's':
            keyPressed = document.querySelector('.keyS');
            break;
        default:
            return;
    }
    keyPressed.classList.remove('active');
});