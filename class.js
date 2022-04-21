//Prototipos con Sintaxis de Clase
//el uso de clases es JS no es más que otra manera de hacer lo mismo que
//las funciones, pero con una sintaxis distinta.

//Descripción ilustrada entre las sintaxis de los prototipos
//https://res.cloudinary.com/practicaldev/image/fetch/s--3PePIjz5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/qnbqubcipqjl5pb3i8ds.gif


class Student {
    constructor(name, age, approvedCourses) {
        this.name = name;
        this.age = age;
        this.approvedCourses = approvedCourses;
    }

    //metodos
    approveCourse(courseName) {
        this.approvedCourses.push(courseName);
    }
}

//instanciando
const newStudent = new Student(
    "Paco",
    21,
    [
        "Curso Definitivo De HTML & CSS"
    ]
);

//RoRo - Recive an Object Return an Object
/**
 * la ventaja de usar RoRo, es que se vuelve menos complicado el manejo de 
 * los parametros en el momento de enviar los argumentos. Con RoRo no es necesario
 * llevar el mismo orden de los parametros y de los argumentos, esto permite dejar
 * ciertos parametros vacios y así nos evitamos enviar null o undefined para que 
 * nuestro código no falle. 
 */

class House {
    constructor({
        number,
        street,
        capacity, 
        price, 
        status = "Selling"
    }) {
        this.number = number;
        this.street = street;
        this.capacity = capacity;
        this.price = price;
        this.status = status;
    }

    //Metodo
    soldHouse(newStatus) {
        this.status = newStatus;
    }
}

//Instancia
const newHouse = new House(
    {
        number: 12,
        street: "Principal Avenue",
        capacity: "5 People & 2 Cars",
        price: 1200000,
    }
);

//otros ejemplos usando la sintaxis de clase y RoRo
class OtakuProfile {
    constructor(
        //Parametro RoRo
        {
            name,
            age,
            email,
            watched = [],
            planToWatch = [],
            dropped = []
        }
    ) {
        //Referencias
        this.name = name;
        this.age = age;
        this.email = email;
        this.watched = watched;
        this.planToWatch = planToWatch;
        this.dropped = dropped;
    }

    //Metodos
    Watched(animeName) {
        this.watched.push(animeName);
    }
    PlanToWatch(animeName) {
        this.planToWatch.push(animeName);
    }
    Dropped(animeName) {
        this.dropped.push(animeName);
    }
}

//Instancia
const asta = new OtakuProfile(
    {
        name: "Asta",
        age: 15,
        email: "asta@blackclover.com"
    }
);