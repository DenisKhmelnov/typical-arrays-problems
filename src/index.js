
exports.min = function min (array) {

    if(arguments.length === 0 || array.length === 0) return 0;

    let min = array[0];
    for(let i of array){
        if (i < min) min = i;
    }

    return min;
}

exports.max = function max (array) {
  if(arguments.length === 0 || array.length === 0) return 0;

    let max = array[0];
    for(let i of array){
        if (i > max) max = i;
    }

    return max;
}

exports.avg = function avg (array) {
    if(arguments.length === 0 || array.length === 0) return 0;

    let avg = 0;
    for(let i of array) {
        avg += i;
    }
    return avg / array.length;
}
