function mergeSort(array) {
    if(array.length < 2) {
        return [array[0]];
    } else {
        const leftHalf = Math.ceil(array.length / 2);
        const left = mergeSort(array.slice(0, leftHalf));
        const right = mergeSort(array.slice(leftHalf, array.length));
        const temparray = [];
        while(true) {
            if (left.length === 0 && right.length === 0) {
                break;
            }
            if (left.length === 0) {
                temparray.push(...right);
                break;
            } else if (right.length === 0) {
                temparray.push(...left);
                break;
            } else if (left[0] < right[0]) {
                temparray.push(left.shift());
            } else {
                temparray.push(right.shift());
            }
        }
        return temparray;
    }
}

const arrays = [4, 8, 6, 2, 1, 7, 5, 3]

console.log(mergeSort(arrays));
