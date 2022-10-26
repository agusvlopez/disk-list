'use strict';

/*
 * LOPEZ, AGUSTINA
 */

// CLASE DISCO

class Disco {

    constructor(nombre, autor, codigo, pistas){
        this.nombre = nombre;  //nombre del disco
        this.autor = autor; //'nombre del autor del disco';
        this.codigo = codigo; //0; codigo numérico único del disco(no se puede repetir)
        this.pistas = pistas = []; // array de pistas
}
}

// CLASE PISTA

class Pista {
    constructor(nombre, duracion){
        this.nombre = nombre,
        this.duracion = duracion
    }
}

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:
let discos = [];
let codigos = [];

// Función Cargar:
const Cargar = () => {
    
    //funcion validar disco 
    const validarDisco = () => {

        let nombreDisco = prompt("Ingrese el nombre del disco");

        while(nombreDisco.length === 0 ){
            alert("Nombre incorrecto");
            nombreDisco = prompt("Ingrese un nombre de disco válido"); 
        }
        return nombreDisco;
    }

    //validar autor
    const validarAutor = () => {

        let nombreAutor = prompt("Ingrese el nombre del autor o banda");
        while(nombreAutor.length === 0 ){
            alert("Nombre incorrecto");
            nombreAutor = prompt("Ingrese un nombre de autor o banda válido"); 
        }
        return nombreAutor;
    }

    let codigoUnico;

    //validar codigo
    const validarCodigo = () => {
        
        codigoUnico = parseInt(prompt("Ingrese un código numérico único del disco del 1 al 999"));
        while(isNaN(codigoUnico) || codigoUnico < 1 || codigoUnico > 999 ||  codigoUnico == codigos){
            alert("Codigo incorrecto")
            codigoUnico = parseInt(prompt("Puede que el codigo ya haya sido ingresado. Ingrese un código numérico único válido del 1 al 999"));
        }
        return codigoUnico; 
    }

    // validar pistas

    // nombre pista
    const validarNombrePista = () => {

        let nombrePista = prompt("Ingrese el nombre de la pista");
    
        while (nombrePista.length === 0) {
    
          alert("Pista inválida");
          nombrePista = prompt("Ingrese un nombre de pista válido");
    
        }
        return nombrePista;
    
      }

     //duracion pista
      const validarDuracion = () => {
    
        let duracionPista = parseInt(prompt("Ingrese la duración de la pista (entre 0 y 7200 segundos inclusive)"));
    
        while ( isNaN(duracionPista) || duracionPista < 0 || duracionPista > 7200) {
    
          alert("Duracion incorrecta");
          duracionPista = parseInt(prompt("Ingrese una duración que no supere los 7200 segundos o sea menor a 0"));
    
        }
    
        alert("Nota agregada correctamente");
        return duracionPista;
    
      }
    // crear nuevo disco
    let nuevoDisco = new Disco();
    nuevoDisco.nombre = validarDisco();
    nuevoDisco.autor = validarAutor();
    nuevoDisco.codigo = validarCodigo();    

    //crear nueva pista 
    const crearPista = () => {
        let nuevaPista = new Pista();
        nuevaPista.nombre = validarNombrePista();
        nuevaPista.duracion = validarDuracion();
    
        return nuevaPista;
      }

};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:
