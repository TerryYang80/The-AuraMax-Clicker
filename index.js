const music = new Audio("./phonk.mp3");
music.loop = true;

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", (event) => {
    music.volume = event.target.value;
});


let paused = true;

const playPhonk = () => {
    if (paused == true) {
        paused = false;
        music.play();
    } else {
        paused = true;
        music.pause();
    }
}