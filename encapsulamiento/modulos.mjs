function videoPlay(id) {
    const secretURL = `google.com ${id}`;
    console.log(`Le has dado Play, ID: ${secretURL}`);
}

function videoPause(id) {
    const secretURL = `google.com ${id}`;
    console.log(`Le has dado Pause, ID: ${secretURL}`);
}

//Export indica que clases o funciones pueden ser accedidas
//desde otros scripts
export class videos {
    constructor(
        {
            name,
            videoID
        }
    ) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoPause(this.videoID);
    }
};
