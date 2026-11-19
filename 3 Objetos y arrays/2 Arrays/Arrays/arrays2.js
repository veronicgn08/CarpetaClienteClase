function mostrarDOM(elemento,array){
    document.getElementById(elemento).innerHTML = "";
    for(let i=0; i<array.length; i++){
        document.getElementById(elemento).innerHTML += `<div>${array[i]}</div>`;
    }
}

let animales = ["PERRO","GATO","HURON"];


let numeros = [1,9,7,5,99];
console.log(numeros[0]);
console.log(numeros[numeros.length-1]);

console.log(numeros.at(2));
console.log(numeros.at(-1));
console.log(numeros.at(-2));

//Inmutabilidad/Mutabilidad

// METODOS MUTABLES-------------------
let cervezas = ["Mahou","Estrella","Alhambra"];
// push: añade al final
cervezas.push("Heineken");
// unshif: añade al principio
cervezas.unshift("Aguila");
// splice: arega el elemento en cualquier posicion incluso puede borrar
// splice(posicion donde quiero insertar, numero de valores a eliminar, elemento a inserar)
cervezas.splice(2,0,"Bud","x");
console.log(cervezas);
cervezas.splice(3,1,"Cruzcampo");
console.log(cervezas);
// popo: elemina el ultimo elemento
cervezas.pop();
// shift: elimina el primer elemento
cervezas.shift();
// fill: rellna valores desde una posicion hasta otra
//cervezas.fill("Desperados",0,cervezas.length);
console.log(cervezas);
mostrarDOM("array1",cervezas);
mostrarDOM("array2",animales);


// METODOS INMUTABLES------------------------
let aguas = ["Monte pinos","Bio solan"];
// concat: concatena dos arrays, crea un nuevo array sin modificar la estructur de ninguno de los concatenados. El nuevo array es un array independiente del primero.
let bebidas = cervezas.concat(aguas);
bebidas.push("Fontbella");


// indexOf: Busca la posicion de un elemento, si lo encuentra devuelve el indice y si no -1
// slice: genera un nuevo array apartir de un grupo de valores

let cervezas2 = cervezas.slice(2);

mostrarDOM("array1",cervezas);
mostrarDOM("array2",bebidas);
//mostrarDOM("array3",aguas);

//SPREAD Primer uso 
let numeros2  = [1,2,3,4]
function suma(a,b,c,d){
    return a+b+c+d;
};
console.log(suma(1,2,3));
console.log(suma(numeros2[0],numeros2[1],numeros2[2],numeros2[3]));
console.log(suma(...numeros2)); // Importante

// Segundo uso
// Concatenar arrays
let spreadArray = [...numeros,...cervezas];
mostrarDOM("array1",spreadArray);
let spreadArray2 = [...numeros,"mesa","silla",...cervezas];
mostrarDOM("array2",spreadArray2);

// tercer uso
// Copiar arrays
let copiaArray = numeros2;
// copiaArray [0] = 100;
// numeros2 [1]=300;
// mostrarDOM("array1",numeros2);
// mostrarDOM("array2",copiaArray);

copiaArray = [...numeros2];
copiaArray [0] = 100;
numeros2 [1]=300;
mostrarDOM("array1",numeros2);
mostrarDOM("array2",copiaArray);


//ARRAY DE OBJETO
// let listaCursos = [];

// function Curso(len,h,pre) {
//     this.lenguaje = len;
//     this.horas = h
//     this.precio = pre;

//     listaCursos.push(this);

// }

// curso1 = new Curso ("Java","60h",500);
// curso1 = new Curso ("Javascript","200h",1500);
// curso1 = new Curso ("PHP","300",2000);

// console.log(listaCursos);


let lenguajeProg =[{nombre: "CSS", horas:100, precio:100},
    {nombre: "HTML", horas:75, precio:700},
    {nombre: "JAVA", horas:175, precio:500},
    {nombre: "JAVASCRIPT", horas:200, precio:600}];

console.log(lenguajeProg[2].nombre);

function mostrarDOM2(elemento,array){
    document.getElementById(elemento).innerHTML = "";
    for(let i=0; i<array.length; i++){
        document.getElementById(elemento).innerHTML += `<div>${array[i].nombre} Horas ${array[i].horas} Precio ${array[i].precio}</div>`;
    }

    document.getElementById("array2").innerHTML = "";
    for(let i=0; i<array.length; i++){
        document.getElementById("array2").innerHTML += `<div>Horas ${array[i].horas}</div>`;
    }

   document.getElementById("array3").innerHTML = "";
    for(let i=0; i<array.length; i++){
        document.getElementById("array3").innerHTML += `<div>${array[i].precio} Euros</div>`;
    }

}
mostrarDOM2("array1",lenguajeProg);

// ¿ que es una funcion de primer orden y que es una funcion de orden superior ?
// Una funcion de orden superior recibe otra función como parámetro y la ejecuta


// FUNCIONES DE PRIMER ORDEN
let fn = function (){
    console.log("Hola");
};

//FUNCIONES DE ORDEN SUPERIOR

function ordenSuperior(funcion,nombre){
    console.log("Antes");
    funcion(nombre);
    console.log("Despues");
}
    ordenSuperior(fn);


// FUNCIONES FLECHA/ARROW----------------------------------------------
// solo se quitan los () en el caso de que haya un unico parametro.
// let fnArrow = x => x +1 ;
// let fnArrow = () => 5 + 1 ;
// let fnArrow = (a,b) => a + b ;
// let fnArrow = (a,b) => {
//     if (a!=0){

//     }
//     return a + b;
// };

let fnArrow = (nombre,texto) =>  {
    console.log(`Hola ${nombre} ${texto}`);
};

ordenSuperior(fnArrow,"Pepe");
fnArrow("Pepe", "¿Que tal estas?");

//FOR...OF para objetos iterables (array, map, set, string)
for (let e of lenguajeProg) {
    console.log(`Lenguaje ${e.nombre} Horas ${e.horas} Precio ${e.precio}`);
};


//FOREACH es de orden superior

lenguajeProg.forEach((lenguaje,indice) => {
    console.log(lenguaje);
    console.log(`Indice ${indice}`);
});

//SORT funcion MUTABLE--------------
// let numerosDes = [888,3,34,7,23,67,20];
// console.log(numerosDes.sort((a,b)=> a-b ));//ascendente  
// console.log(numerosDes.sort((a,b)=> b-a )); //descendente 


//Numericos
// console.log(lenguajeProg.sort((a,b)=> a.precio-b.precio ));//ascendente  
// console.log(lenguajeProg.sort((a,b)=> b.horas-a.horas )); //descendente 

// //Alfabeticos
// console.log(lenguajeProg.sort((a,b) => {
//     if(a.nombre > b.nombre){
//         return 1;
//     }
//     if(a.nombre < b.nombre){
//         return -1;
//     }
//     return 0
// }));



//METODOS

// .find: encontrar el PRIMER ELEMENTO que cumpla una condicion
let encontrado = lenguajeProg.find(elemento => elemento.nombre === "HTML"); // SOlO te devuelve el primer encontrado, en elemento puedes poner el nombre que quieras.
console.log(encontrado);

let encontrado1 = lenguajeProg.find(elemento => elemento.precio > 100);
console.log(encontrado1);

// filter: igual que find pero devuelve TODOS los elementos que cumplan la condicion
let encontrado2 = lenguajeProg.filter(elemento => elemento.nombre === "HTML");
console.log(encontrado2);
let encontrado3 = lenguajeProg.filter(elemento => elemento.precio > 100);
console.log(encontrado3);


// .every: que cada uno de los elementos cumpla una condicion, devuelve true si TODOS cumplen la condicion
// si un unico elemento no lo cumple devuelve falsa
let funcionEvery = e => e.horas > 70;
console.log(lenguajeProg.every(funcionEvery));

// .some: igual que true con que UN UNICO ELEMENTO cumpla la condicion ( Al contrario que every)

let funcionSome = e => e.horas > 190;
console.log("Probando some: "+lenguajeProg.some(funcionSome));

// .reverse: (MUTABLE = lo guarda cambiado) invierte el orden de los elementos de un array, el primer elemento pasa a ser el ultimo y el ultimo pasa a ser el primero.
console.log(lenguajeProg.reverse());

// MAP: (INMUTABLE) recorre todos los elementos del array y aplica alguna operacion
//tambien puede transformar un array
let lenguajesProg2 = lenguajeProg.map(elemento => {
    return{
        nombre: elemento.nombre,
        horas: elemento.horas * 2,
        precio: elemento.precio
    }
});
console.log(lenguajesProg2);

let lenguajesProg3 = lenguajeProg.map(elemento => {
    return{
        horas2: elemento.horas * 2
    }
});
console.log(lenguajesProg3);
// let lenguajesProg4 = lenguajeProg.map(elemento => {
//     return horas2: elemento.horas * 2
// });
// console.log(lenduajesProg4);

// sumar todos los elementos del array
// let lenguajeProg =[{nombre: "CSS", horas:100, precio:100},
//     {nombre: "HTML", horas:75, precio:700},
//     {nombre: "JAVA", horas:175, precio:500},
//     {nombre: "JAVASCRIPT", horas:200, precio:600}];


//PROBANDO
let sumaTotal = lenguajeProg =>  {
    let sumaHorasTotales = 0;
    for (let x of lenguajeProg) {
        sumaHorasTotales += x.horas;       
    } 
    return sumaHorasTotales;
}
console.log("Estas son las horas totales: " + sumaTotal(lenguajeProg));


let sumaPrecioTotal = 0;
lenguajeProg.forEach((x) => {
    return sumaPrecioTotal += x.precio;
});

console.log("Precio total: " + sumaPrecioTotal);

// reduce: recorre el array y te devuelve un unico valor
let sumaHoras = lenguajeProg.reduce((acumulador,valor) => acumulador + valor.horas,0);
console.log(sumaHoras);

// el reduce asi concatena.
let cursos = lenguajeProg.reduce((acumulador,valor) => acumulador +" "+ valor.nombre,"");
console.log(cursos);