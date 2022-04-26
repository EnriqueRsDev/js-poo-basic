//Importando 
import { videos } from "./modulos.mjs";

/**
 * Al utilizar modulos y hacer exportaciones, como en este caso,
 * al momento de hacer la instancia, no se debe de hacer en el archivo
 * donde están los prototipos, sino que se deben de hacer en donde se importan
 */
const newVideo = new videos(
    {
        name: "Video1",
        videoID: 1
    }
)

newVideo.reproducir();