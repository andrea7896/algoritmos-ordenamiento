
function merge(a){
    if(a.length === 1){
        return a;
    }
        let redondeo = Math.floor(a.length/2);
        let arrD = a.slice(0,redondeo);
        let arrI = a.slice(redondeo);

        let Do = merge (arrD);
        let Io = merge (arrI);
        let nuevo = []

        while((Do.length > 0) && (Io.length > 0)){
            if(Io[0] > Do[0]){
                nuevo.push(Do[0]);
                Do.shift();
            }else{
                nuevo.push(Io[0]);
                Io.shift();
            }
        }

        return nuevo = [...nuevo,...Do,...Io];
}


console.log(merge([3,-5,3,6,1]))