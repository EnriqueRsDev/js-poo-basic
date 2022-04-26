/**
 * El encapsulamiento en JS es guardar/proteger las variables o metodos
 * Una de las desventajas de encapsulamiento en JS es que no se pueden modificar,
 * por fuera, los metodos encapsulados.
 * 
 * ---Getters & Setters---
 * Sirven para encapsular metodos y atributos
 */

//Ejemplo

class Course {
    constructor(
        {
            name, 
            classes = []
        }
    ) {
        //poner el guión bajo sirve para esconder el atributo
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

const newCourse = new Course(
    {
        name: "Curso 1",
        classes: []
    }
)