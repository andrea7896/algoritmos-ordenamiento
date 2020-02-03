const array = [5,2,-4,8];
console.log(BubbleSort(array));

function BubbleSort(array){
    for(let h=0;h<=array.length ; h++){
        for(let i=0; i<=array.length ; i++){
            if(array[i] > array[i+1]){
                let temporal = array[i];
                array[i] = array [i+1];
                array[i+1] = temporal;
            }
        }
    }  
    return array;
}
