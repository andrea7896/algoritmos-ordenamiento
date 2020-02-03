function insertionSortTwo(a) {
    for (i=1; i < a.length; i++) {
        console.log("a ", a)
        console.log("i", i)
        value = a[i]
        console.log("value", value)
        pivotKey = i-1
        console.log ("pivot key", pivotKey)
        console.log("while "+pivotKey+" >= 0 && "+a[pivotKey]+" > "+value)
        while (pivotKey >= 0 && a[pivotKey] > value) {
          console.log("a[pivotKey+1]"+ a[pivotKey+1])
          console.log(" = ")
          console.log("a[pivotKey]"+a[pivotKey])
          a[pivotKey+1] = a[pivotKey]
          pivotKey = pivotKey-1
          console.log("pivotKey = ", pivotKey)
        }
        a[pivotKey + 1] = value
        console.log("a[pivotKey +1] = "+value)
    }
    return a;
}
a = [85, 12, 13, 45, 72, 51]
console.log(insertionSortTwo(a));