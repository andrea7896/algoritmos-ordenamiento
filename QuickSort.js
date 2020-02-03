
function Quicksort(array){
let pivot = array[0];
let menores=[];
let mayores=[];

if(array.length <= 1){
    return array;
}else{
for(let x=1;x < array.length ;x++){
    if(pivot>array[x]){
        menores.push(array[x]);
    }else{
        mayores.push(array[x]);
    }
}

let menOrd = Quicksort(menores);
let mayOrd = Quicksort(mayores);
let nuevo = []

    return nuevo = [...menOrd,pivot,...mayOrd];

    }
}



console.log(Quicksort([1,2,-1]))
