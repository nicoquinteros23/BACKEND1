// REPASO
// TEMPLATES LITERALES
// DESESTRUCTURACION
// FUNCIONES DE FileSystemDirectoryHandleCALLBACKS
// PROMESAS
// ASYNC AWAIT


/* CONST, LET Y VAR */
/* let nombre = 'John'
const apellido = 'Doe'  // No se puede reasignar
 */
/* templates */
let frase1 = 'hola comision'
let frase2 = 'hola mundo'

let suma = frase1 + ' ' + frase2
console.log( "estoy usando interpolacion -->"+ `${frase1} ${frase2}`)

/* desestructuuracion - objeto - arrray */
const persona = {
    nombre: 'John',
    apellido: 'Doe',
    edad: 30
}



const {nombre,apellido,edad} = persona
nombre,
apellido,
edad

console.log(nombre,apellido,edad) 