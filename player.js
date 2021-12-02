class MediaPlayer {

    isMuted = false

    /**
     * @param {HTMLVideoElement} video
     */

    constructor (video){
        this.video = video

    }

    play (){
        this.video.play()
    }

    pause (){
        this.video.pause()
    }

    mute (){
        if (this.isMuted){
            this.video.muted = false
            this.isMuted = false
        } else {
            this.video.muted = true
            this.isMuted = true
        }
    }


}

export default MediaPlayer