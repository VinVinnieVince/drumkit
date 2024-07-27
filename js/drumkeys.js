// Alphanumeric check - normally regex is simpliest, but defining a function can perform faster
// Src: https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
// function created to avoid errors when non-alphanumerical keys are pressed e.g. '[', '.', '#' etc.
function isAlphaNumeric(str) {
    let code;
  
    for (let i = 0; i < str.length; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

// e = events
function activate(e) {
    if (!(isAlphaNumeric(e.key))) return;

    let keyString = '.key' + String(e.key).toUpperCase();
    let keyClass = document.querySelector(keyString);
    if (keyClass) {
        keyClass.classList.add('active');
    }
};

function deactivate(e) {
    if (!(isAlphaNumeric(e.key))) return;
    let keyString = '.key' + String(e.key).toUpperCase();
    let keyClass = document.querySelector(keyString);
    if (keyClass) {
        keyClass.classList.remove('active');
    }
};

allAudio = document.querySelectorAll('audio');
allAudio.forEach ((audio) => {
    audio.preload = 'auto';
});

function playSound(e) {
    if (!(isAlphaNumeric(e.key))) return;
    let caps = String(e.key).toUpperCase();
    let audio = document.querySelector(`audio[data-sound="${caps}"]`);

    if (!audio) { return };

    audio.currentTime = 0;
    audio.play();
};

// to allow EventListener to work for entire page, target body or window
const body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
    playSound(e);
    activate(e);
});

body.addEventListener('keyup', deactivate);