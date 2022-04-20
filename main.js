//Objeto literal
const Paco = {
    name: "Paco",
    age: 20,
    nationality: "Salvadorian",
    approvedCourses: [
        "Como lavarse las manos correctamente",
        "HTML & CSS Definitivo"
    ],
    //Añadiendo un metodo a Paco 
    approveCourse(courseName) {
        //this hace referencia al objeto, es decir a Paco
        this.approvedCourses.push(courseName);
    }
}

//Accediendo a las propiedades de Paco
Paco.approvedCourses.push("Curso de Frontend Practico") //Añadiendo mas valores a un de sus propiedades
//Cambiando valores de age a Paco
Paco.age += 1; //21

/**
 * Añadir métodos a un objeto en javascript tiene dos maneras de realizarse
 *      -manera 1:
 *          nombreMetodo: function () {  
 *          
 *             }
 *      -manera 2:
 *          nombreMetodo() {
 *             
 *          }
 */


//Creando un prototipo
function Student(name, age, approvedCourses) {
    //asignando los atributos
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
}

//Creando un método para Student desde fuera de la función.
Student.prototype.approveCourse = function (courseName) {
    this.approvedCourses.push(courseName);
}

//Instanciando el prototipo
const student1 = new Student(
    //Como es la instancia del prototipo, lo que se enviará son los argumentos
    //dichos argumentos están especificados en los parametros de la función Student
    "Paco", //name
    21, //age
    [
        "Curso Definitivo de HTML & CSS" //approvedCourses
    ]
);
//añadiendo un nuevo curso usando el metodo de la función.
student1.approveCourse("Curso de CSS Grid");

//Ejemplos propios con instancias de prototipos

//Prototipo
function House (number, street, capacity, price, status = "Selling") {
    this.number = number;
    this.street = street;
    this.capacity = capacity;
    this.price = price;
    this.status = status;
}

//Metodo 
House.prototype.newStatus = function (newStatus) {
    this.status = newStatus;
}

//instanciando el prototipo
const newHouse = new House(
    12,
    "Principal Avenue",
    5,
    120000
);

//Otro Ejemplo

//Prototipo
function SoccerTeam (teamName, players, games, win, loose, tie) {
    this.teamName = teamName;
    this.players = players;
    this.games = games;
    this.win = win;
    this.loose = loose;
    this.tie = tie;
}

//Metodo
SoccerTeam.prototype.playersNames = function (playerName) {
    this.players.push(playerName);
}

//Instanciando 
const newTeam = new SoccerTeam(
    "Barcelona",
    [
        "Depay",
        "Dejong",
        "L. DeJong",
        "D. Alvez"
    ],
    22,
    15,
    5,
    2
);

//Otro Ejemplo
//Prototipo
function OtakuProfile (name, age, userSince, watched, planToWatch, dropped) {
    this.name = name;
    this.age = age;
    this.userSince = userSince;
    this.watched = watched;
    this.planToWatch = planToWatch;
    this.dropped = dropped;
} 

//Metodos
//watched
OtakuProfile.prototype.Watched = function (animeName) {
    this.watched.push(animeName);
}
//PTW
OtakuProfile.prototype.PlanToWatch = function (animeName) {
    this.planToWatch.push(animeName);
}
//Dropped
OtakuProfile.prototype.Dropped = function (animeName) {
    this.dropped.push(animeName);
}

//instancia
const kirito = new OtakuProfile(
    "kirito",
    15,
    "22/04/2019",
    //watched
    [
        "No game No life"
    ],
    //plan To watch
    [
        "Sono Bisquet Doll"
    ],
    //dropped
    [
        "Guilty Crown"
    ]
);