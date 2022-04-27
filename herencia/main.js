class Series {
    constructor(
        {
            serieID,
            name,
            chapters,
            cast = [],
            isBasic = false,
        }
    ) {
        this.ID = serieID;
        this.name = name;
        this.chapters = chapters;
        this.cast = cast;
        this.isBasic = isBasic;
    }
}

const serie1 = new Series(
    {
        serieID: 1,
        name: "Serie 1",
        chapters: 12,
        cast: [
            "Actor 1",
            "Actriz 1",
            "Actor 2"
        ],
        isBasic: true,
    }
);

const serie2 = new Series(
    {
        serieID: 2,
        name: "Serie 2",
        chapters: 20,
        cast: [
            "Actor 1",
            "Actriz 1",
            "Actor 2"
        ],
        isBasic: false,
    }
);

class User {
    constructor(
        {
            name,
            email,
            userName,
            series = [],
        }
    ) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.series = series;
    }
}
//para poder heredar las propiedades de la superclase se usa extends y se especifica de que clase está heredando
class BasicUser extends User {
    constructor(props) {
        //Llama el constructor de la clase madre y envia todo los argumentos a la super clase
        super(props);
    } 

    addSerie(serieName) {
        if (serieName.isBasic) {
            this.series.push(serieName);
        } else {
            console.warn("Lo Sentimos! No tienes acceso a esta serie! Adquiere una suscripción o mejora la que ya tienes");
        }
    }
}

class PremiunUser extends User {
    constructor(props) {
        super(props);
    }
    
    addSerie(serieName) {
            this.series.push(serieName);
    }
}

const user1 = new BasicUser(
    {
        name: "Paco",
        userName: "PacOtoko",
        email: "paco@otako.com",
        series: [
            serie1
        ]
    }
);
