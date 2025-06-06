const removeFromArray = function(arr) {
    if(arguments[1] === undefined){
        return arr;
    }

    let args = Array.prototype.slice.call(arguments,1);
    let size = args.length;
    for(let i = 0; i<size; i++){
        let ele = args[i];

        while(true){
            let index = arr.indexOf(ele);
            if(index == -1){
                break;
            }
            arr.splice(index,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
