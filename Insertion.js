const array = [5,2,4,8]
console.log(insertion(array));

function insertion(array){
    let copy = [array[0]];
    for(let i=1; i<array.length; i++){
        if(array[i]<copy[i-1]){
            var temp = array[i]
            for(let j=copy.length-1 ; j>=0 ;j--){
                if((j==0) && (temp < copy[j])){
                    copy.splice(j,0,temp)
                    break;
                }
                if((temp<copy[j]) && (temp > copy[j-1])){
                    copy.splice(j,0,temp)
                    break;
                }
            }
        }else{
            copy.push(array[i]);
        }
    }
    return copy;
}

