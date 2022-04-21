/**
 * Realizar el código necesario para crear el prototipo en el cual se basarán las intancias
 * Ciertos metodos deberán ser convertidos a clases para evitar problemas con la adaptibilidad futura.
 * Utilizar la poo, RoRo.
 */

//prototipo para animes
class Animes {
    constructor (
        {
            name,
            chapters
        }
    ) {
        this.name = name;
        this.chapters = chapters;
    }
}

//Instanciando
const anime01 = new Animes(
    {
        name: "Sono Bisquet Doll",
        chapters: 24
    }
);
const anime02 = new Animes(
    {
        name: "anime 2",
        chapters: 24
    }
);
const anime03 = new Animes(
    {
        name: "anime 3",
        chapters: 24
    }
);
const anime04 = new Animes(
    {
        name: "anime 4",
        chapters: 24
    }
);
const anime05 = new Animes(
    {
        name: "anime 5",
        chapters: 24
    }
);

//Prototipo madre de los usuarios
class UserProfile {
    constructor (
        {
            name,
            userName,
            age,
            watched = [],
            planToWatch = [],
            dropped = []
        }
    ) {
        this.name = name;
        this.userName = userName;
        this.age = age;
        this.animes = {
            watched,    //watched: watched
            planToWatch, //planToWatch: planToWatch
            dropped //dropped: dropped
        }
    }

    //watched
    addWatched(animeName) {
        this.animes.watched.push(animeName);
    } 
    //planToWatch
    addPlanToWatch(animeName) {
        this.animes.planToWatch.push(animeName);
    }
    //Dropped
    addDropped(animeName) {
        this.animes.dropped.push(animeName);
    }
}

//instanciando al prototipo Userprofile
const user1 = new UserProfile(
    {
        name: "Paco",
        userName: "pacOtako",
        age: 21,
        watched: [],
        planToWatch: [],
        dropped: []
    }
);