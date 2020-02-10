function heap(array){
    //let copy = [...copy];
    let n = array.length-1;
    let maxV = array[0];
    let aux;

    
    while(n>=0){
    for(let i=0; i<=n ; i++){
        if(maxV < array[i]){
            aux = maxV;
            array[0] = array[i];
            array[i]=aux;
            maxV = array[0]
        }
    }
    array = Cambio(array,n);
    --n
    
    }
    
    

    return array;
}

function Cambio(array,n){
    let x = array[0];
        array[0] = array[n];
        array[n] = x;

        return array;
}

console.log(heap([2,5,8,1]));