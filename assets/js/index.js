// play, pause video
let video = document.querySelector(".video-wrapper video");
document.getElementById("play-btn").addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});