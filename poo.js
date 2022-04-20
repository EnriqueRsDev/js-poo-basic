/**
 * ¿Qué es un Objeto en JS?
 * Un Objeto en JS no es más que una instancia de un prototipo
 * No es lo mismo un objeto literal con respecto a una intansia del prototipo
 */

//-Objeto Literal: Son los objetos que creamos
    //Ej.
        const objetoLiteral = {
            llave: "Valor",
            llave: "Valor",
            llave: "Valor",
        }

//-Intancia del prototipo: Es un objeto el cual hace referencia a una clase madre
    //Ej.
        function Prototipo () {
            this.llave = "Valor",
            this.llave = "Valor",
            this.llave = "Valor"
        }
        //Instancia
        const intancia = new Prototipo();

