/**
 * Realizar el código necesario para crear el prototipo en el cual se basarán las intancias
 * Ciertos metodos deberán ser convertidos a clases para evitar problemas con la adaptibilidad futura.
 * Utilizar la poo, RoRo.
 */

//prototipo para animes
class Animes {
    constructor (
        {
            id,
            name,
            numberOfChapter,
            chapters = []
        }
    ) {
        this.id = id;
        this.name = name;
        this.numberOfChapter = numberOfChapter;
        this.chapters = chapters;
    }

    //metodos
    //addChapter
    addChapter({number, chapterName, duration}) {
        this.chapters.push({number, chapterName, duration});
    }
}

//Instanciando
const anime01 = new Animes(
    {
        id: 1,
        name: "anime 1",
        numberOfChapter: 24,
        chapters: [
            {number:1, chapterName: "name 1", duration: "duration"},
            {number:2, chapterName: "name 2", duration: "duration"},
        ]
    }
);
const anime02 = new Animes(
    {
        id: 2,
        name: "anime 2",
        numberOfChapter: 24,
        chapters: {
            chapter1: {chapterName: "name 1", duration: "duration"},
            chapter2: {chapterName: "name 2", duration: "duration"},
        }
    }
);
const anime03 = new Animes(
    {
        id: 3,
        name: "anime 3",
        numberOfChapter: 24,
        chapters: [
            {number:1, chapterName: "name 1", duration: "duration"},
            {number:2, chapterName: "name 2", duration: "duration"},
        ]
    }
);
const anime04 = new Animes(
    {
        id: 4,
        name: "anime 4",
        numberOfChapter: 24,
        chapters: [
            {number:1, chapterName: "name 1", duration: "duration"},
            {number:2, chapterName: "name 2", duration: "duration"},
        ]
    }
);
const anime05 = new Animes(
    {
        id: 5,
        name: "anime 5",
        numberOfChapter: 24,
        chapters: [
            {number:1, chapterName: "name 1", duration: "duration"},
            {number:2, chapterName: "name 2", duration: "duration"},
        ]
    }
);

//Prototipo madre de los usuarios
class UserProfile {
    constructor (
        {
            name,
            userName,
            age,
            watching = [],
            watched = [],
            planToWatch = [],
            dropped = [],
        }
    ) {
        this.name = name;
        this.userName = userName;
        this.age = age;
        this.animes = {
            watching,   //watching: watching
            watched,    //watched: watched
            planToWatch, //planToWatch: planToWatch
            dropped //dropped: dropped
        };
    }

    //Watching
    addWatching(animeName) {
        this.animes.watching.push(animeName);
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
        watching: [],
        watched: [],
        planToWatch: [],
        dropped: [],
    }
);