function shellSort(array) {
  let size = array.length;
  let gapSize = Math.floor((size) / 2);
  while (gapSize > 0) {
      ////////////////////////////////
    for(h=0; h < gapSize ; h++){
      for (i = gapSize; i < size; i = gapSize + i) {
        let temp = array[i];
        for (j = i - gapSize; j >= 0 && array[j] > temp; j = j - gapSize) {
          array[j + gapSize] = array[j];
        }
        array[j + gapSize] = temp;
      }
    }
      ///////////////////////////////
      gapSize = Math.floor(gapSize/2) 
  }
  return array;
};
console.log(shellSort([3,4,0,-1,1,-4,7,9,3]));




  

//   return array;
// }
//console.log(insertionbetter([1, 4, 0, -1]))
