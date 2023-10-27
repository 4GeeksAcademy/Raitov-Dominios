let pronombre = ['the', 'our'];
let adjetivo = ['great', 'big'];
let nombre = ['jogger', 'racoon'];
let extension = ['.com', '.cl', '.es', '.org'];


function suma(pronombre, adjetivo, nombre, extension) {

    num_pronombre = Math.floor(Math.random() * pronombre.length);
    num_adjetivo = Math.floor(Math.random() * adjetivo.length);
    num_nombre = Math.floor(Math.random() * nombre.length);
    num_extension = Math.floor(Math.random() * extension.length);
     
    return pronombre[num_pronombre] + adjetivo[num_adjetivo] + nombre[num_nombre] + extension[num_extension];
       

}

console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));
console.log(suma(pronombre, adjetivo, nombre, extension));