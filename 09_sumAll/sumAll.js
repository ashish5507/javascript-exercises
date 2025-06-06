const sumAll = function(i1,i2) {
    if(i1>=0 && i2>=0 && typeof(i1) == "number" && typeof(i2)=="number" && Math.floor(i1) == i1 && Math.floor(i2) == i2){
        let sum = 0;
        let min = i1>i2?i2:i1;
        let max = i1>i2?i1:i2;
        for(let i = min; i<=max; i++){
            sum+=i;
        }
        return sum;
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
