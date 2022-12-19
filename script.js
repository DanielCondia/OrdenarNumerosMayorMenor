var array = [140,139,160,170,135];
var arrayOrdenado = [];
var controlador = 1;
for (var index = 0; index <= array.length; index++) {
    if(array[controlador] < array[index]){
        arrayOrdenado.push(array[controlador]);
        arrayOrdenado.push(array[index]);
        let contador = ++controlador;
        while(contador < array.length){
            arrayOrdenado.push(array[contador]);
            contador++;
        }
        array = [];
        array = arrayOrdenado;
        arrayOrdenado = [];
        index = -1;
        controlador = 0;
    }
    else{
        arrayOrdenado.push(array[index]);
    }
    controlador++;
}
console.log("Array ordenado " + arrayOrdenado);