//¿Qué devuelven estos códigos?

//En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la consola.
/*1. let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length]);// No puede acceder a la posición por que en un arreglo siempre el orden empieza desde cero, por lo cual hace que la longitud del arreglo sea el arreglo -1, siendo este precisamente el ultimo elemento del arreglo.

//2. let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5])// mostraria a Iroman.

//3. let str = "un string cualquiera";
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1])// Este haria el llamado del ultimo elemento del arreglo que es str, que es la misma funcion que almacena "un string cualquiera", por lo tanto lo que se mostrará en la terminal es: "un string cualquiera".*/

//________________________________________________________________

//Colecciones de películas (y más…)

/*El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:*/

/*1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.*/
let pelicula = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log(pelicula[3]);

/*2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

function convertirAMayusculas(arreglo) {
    let arregloMayusculas = [];
    for (let i = 0; i < arreglo.length; i++) {
        arregloMayusculas.push(arreglo[i].toUpperCase());
    }
    return arregloMayusculas;
}

let peliculasMayusculas = convertirAMayusculas(peliculas);

console.log(peliculasMayusculas);

/*3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.*/

let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
function convertirAMayusculas(arreglo) {
    let arregloMayusculas = [];
    for (let i = 0; i < arreglo.length; i++) {
        arregloMayusculas.push(arreglo[i].toUpperCase());
    }
    return arregloMayusculas;
}

let peliculasMayusculasInfantil = convertirAMayusculas(animadas);

console.log(peliculasMayusculasInfantil);


function concatenar(peliculas1,peliculas2){
    for(let i=0;i< peliculas2.length;i++){
    peliculas1.push(peliculas2[i]);
}
return peliculas1;
}
console.log(peliculasconcatenadas=concatenar(peliculasMayusculas,peliculasMayusculasInfantil));


/*4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/

let animadas1 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

let animadas2 = animadas1.splice(-1);
console.log(animadas1);
console.log(animadas2);

function convertirAMayusculas(arreglo) {
    let arregloMayusculas = [];
    for (let i = 0; i < arreglo.length; i++) {
        arregloMayusculas.push(arreglo[i].toUpperCase());
    }
    return arregloMayusculas;
};

let peliculasMayusculasInfantil1 = convertirAMayusculas(animadas);

console.log(peliculasMayusculasInfantil1);


function concatenar(peliculas1,peliculas2){
    for(let i=0;i< peliculas2.length;i++){
    peliculas1.push(peliculas2[i]);
}
return peliculas1;
}
console.log(peliculasconcatenadas=concatenar(peliculasMayusculas,peliculasMayusculasInfantil1));


/*5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.*/
let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar(score1,score2){
    for (let i = 0; i <score1.length; i++){
        console.log(score1[i] == score2[i]);
    }

}
 let puntajes = comparar (asiaScores,euroScores);

/*PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.*/

//Extra bonus:

//Array inverso:

/*En este ejercicio deberás crear una función que devuelva un array con sus elementos
invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
el orden de sus elementos.*/

/*1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).*/

function imprimirInverso(texto){
    for(let i = texto.length -1; i >=0; i--){
    console.log(texto[i]);
    }
}
let texto1=["¿Qué", "hace", "una",  "abeja", "en", "el", "gimnasio?", "¡Zum-ba!"];
imprimirInverso(texto1);

/*2. Creá la función inversor que tome un array como argumento y devuelva uno
nuevo invertido.*/
function imprimirInverso(texto){
    textoInvertido = texto.reverse();
    for(var i = 0; i < texto.length; i++){
    console.log(textoInvertido[i]);
    }
}
let texto2=["¿Qué", "hace", "una",  "abeja", "en", "el", "gimnasio?", "¡Zum-ba!"];
imprimirInverso(texto2);


//sumaArray()


/*En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10]) // 23
● sumArray([-5,100, 19]) // 114
Simulación Array.join()*/

function sumaArray(array) {
    let arrayNew=0;
    for (var i = 0; i < array.length; i++) {
        arrayNew += array[i];
}
return arrayNew;
}

let arreglo = [1,2,3];
console.log(sumaArray(arreglo));

/*En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau".*/

function join(arregloString){
    let nuevoArreglo="";
    for(let i=0;i<arregloString.length;i++){
        nuevoArreglo += arregloString[i];
    }
return nuevoArreglo;
}
let arreglo1 = ["h","o","l","a"];
console.log(join(arreglo1));





