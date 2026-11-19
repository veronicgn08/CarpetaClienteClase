// function suma (a, b) {
//     return a + b;
// }

// let sumaArrow = (x, y) => {
//     return x + y;
// }

// let dividirArrow = (x, y) => x / y ;

// console.log(suma(2,2));
// console.log(sumaArrow(2,2));
// console.log("Division: "+ dividirArrow(10,2));

// const data = [
//     {name: 'Veronica', apellido: ' Garcia', ciudad:'Soria'},
//     {name: 'Jorge', apellido: ' Hernandez'},
//     {name: 'Javier', apellido: ' Hernandez'},
//     {name: 'Carla', apellido: ' Sarabia'}
// ];

// const nombre = data.map( v => v.name);
// const apellidos = data.map(a => a.apellido);
// const nombreCompleto = data.map (x => x.name + x.apellido);

// console.log(data);
// console.log(nombre);
// console.log(apellidos);


// data.forEach(v =>{
//     console.log(`Nombre:  ${v.name} Apellido: ${v.apellido} Ciudad: ${v.ciudad} \n`);
// });

// // console.log(nombreCompleto);
// console.log("PROBANDOOOO");

// for(let i = 0; i < nombreCompleto.length; i++){
//     let saludarNombreData = nombreData => `Hola ${nombreData}, ¿Que tal estas?`;
//     if(nombreCompleto[i].includes("Hernandez")){
//         console.log(nombreCompleto[i]);
//         console.log(saludarNombreData(nombreCompleto[i])); 
//     };
    
    
// }


// let saludarNombre = nombre => {return `Hola ${nombre}!`;}
// console.log(saludarNombre('Juanma'));

// let saludarNombre2 = nombre => console.log(`Hola ${nombre}!`);
// saludarNombre2('Pepe');

// let sumandoFlechas = (a,b) => `Numero ${a} + ${b} = `+ (a+b);
// console.log(sumandoFlechas(2,5));


// SIN FUNCIONES FLECHA
console.log("Probando a sumar edades y calcular la media ")
const personas = [
    {name: 'Veronica', edad: 32},
    {name: 'Jorge', edad: 35},
    {name: 'Javier', edad: 31},
    {name: 'Carla', edad: 28},
];


// function promedioEdad (){
//     let sumaEdad = 0;
//     for (let x of personas) {
//         sumaEdad += x.edad;       
//     }
//     // console.log("Suma de edades "+sumaEdad);
//     let promedio = sumaEdad / personas.length;
//     return "Suma de edades "+sumaEdad +"\n" + "El promedio de edad es "+ promedio;
// };

// function nombreYedad (personas){
//     let nombreConEdad = "";
//     for(let x of personas){
//         nombreConEdad += "Nombre "+ x.name + " Edad: "+ x.edad+"\n";
//     }
//     return nombreConEdad;
// }
// //console.log(nombreYedad(personas));
// // Aqui ponemos todo el nombreYedad + promedioEdad
// console.log(nombreYedad(personas)+promedioEdad(personas));


// AHORA CON FUNCONES FLECHA
let nombreYedadFlecha = (personas) => {
        let nombreConEdad = "";
    for(let x of personas){
        nombreConEdad += "Nombre "+ x.name + " Edad: "+ x.edad+"\n";
    }
    return nombreConEdad;
}

let promedioEdadFlecha = (personas) => {
    let sumaEdad = 0;
    for (let x of personas) {
        sumaEdad += x.edad;       
    }
    // console.log("Suma de edades "+sumaEdad);
    let promedio = sumaEdad / personas.length;
    return "Suma de edades "+sumaEdad +"\n" + "El promedio de edad es "+ promedio;
}
console.log(nombreYedadFlecha(personas)+promedioEdadFlecha(personas));
