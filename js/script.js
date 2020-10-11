window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`div[data-key="${e.key}"]`);

    key.classList.add('playing')

    if (e.key == 'a' || e.key == 's' || e.key == 'd' || e.key == 'f' || e.key == 'g' || e.key == 'h' || e.key == 'j' || e.key == 'k' || e.key == 'l') {
        audio.currentTime = 0;
        audio.play();
    } else {
        return;
    }

    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach(key => key.addEventListener("transitionend", (e) => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }))


});
