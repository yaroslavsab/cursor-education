document.addEventListener("DOMContentLoaded", function () {

    function playSound(e) {
        const audio = document.querySelector(`audio[data-letter="${e.key}"]`);
        const press = document.querySelector(`.letter[data-key="${e.key}"]`)
        if (!audio) {
            return
        }
        audio.currentTime = 0;
        audio.play();
        press.classList.add('pressed');
    }


    function removeTransition(e) {
        if (e.propertyName !== 'transform') return
        this.classList.remove('pressed');
    }

    const letters = document.querySelectorAll('.letter');
    letters.forEach(leter => leter.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
})