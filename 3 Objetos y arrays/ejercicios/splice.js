//splice
function modificar(array, posicion, cantBorrar, ...elems){
    let tamañoInicial = array.length;//guarda la longitud del array original
    let copia = [];//array donde se guardará el resultado
    if(posicion<=tamañoInicial-1){
        if(cantBorrar<=tamañoInicial-posicion){
            for(i=0; i<tamañoInicial; i++){//recorre el array original
                if(i==posicion){//si la posicion es igual
                    for(j=0; j<elems.length; j++){//recorre los elementos
                        //copia.push(elems[j]);
                        copia[copia.length] = elems[j];//los añade a la copia
                    }
                    i += cantBorrar;//salta los elementos quetiene que borrar
                }
                //copia.push(elems[j]);
                copia[copia.length] = array[i];//añade el elemento del array original a la copia
            }
            return copia;
        }else{
            console.log("La cantidad a borrar es mayor que la longitud del array");
        }
    }else{
        console.log("La posición es mayor que la longitud del array");
    }
}
//Mario Lallana Campos

//comentarios