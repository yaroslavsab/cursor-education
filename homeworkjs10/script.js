document.addEventListener("DOMContentLoaded", function () {
    let cont = document.getElementById('container');


    window.addEventListener('keydown', (e) => {
        let audio = document.querySelector(`audio[data-letter="${e.key}"]`);
        let press = document.querySelector(`.letter[data-key="${e.key}"]`)
        if (!audio) {
            return
        }
        audio.currentTime = 0;
        audio.play();
        press.classList.add('pressed');
    });


})