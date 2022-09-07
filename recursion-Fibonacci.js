function fibs(number) {
    const array = [0, 1];
    for( let i = 2; i < number; i++) {
        array[i] = array[i-1] + array[i-2];
    }
    return array;
}

function fibsRec(number, array = [0, 1]) {
    if (number <= 2) {
        return array;
    } else {
        array.push(array[array.length-1] + array[array.length-2])
        return fibsRec(number-1, array)        
    }
}


console.log(fibs(8));
console.log(fibsRec(8));