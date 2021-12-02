import MediaPlayer from "./player.js";

const video = document.getElementById("vid")
const botonPlay = document.getElementById("play")
const botonPause = document.getElementById("pause")
const botonMute = document.getElementById("mute")

const player = new MediaPlayer(video)

botonPlay.onclick = () => {
    player.play()
}

botonPause.onclick = () => {
    player.pause()
}

botonMute.onclick = () => {
    player.mute()
}
