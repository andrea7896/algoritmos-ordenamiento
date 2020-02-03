const array = [5,2,4,8];
console.log(array);
let m,pm; //m = numero menor , p=posiciondelmenor
console.log(SelectionSort(array));
function SelectionSort(array){
    for(let h=0;h<=array.length;h++){
        for(let i=h+1; i <= array.length;i++){
            if(array[h] > array[i]){
                m = array[i];
                pm = i;
                let temp = array[h];
                array[h] = m;
                array[pm] = temp;
            }
        }
    }
    return array;
}


