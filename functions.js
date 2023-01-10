// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

// 1. Includes
function includes(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (names[i] === item) {
            return true;
        }
    }
    return false;
}

// 2. Index Of
function indexOf(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (names[i] === item) {
            return i;
        }
    }
    return -1;
}

// 3. Reverse
function reverse(array) {
    let reverseArray = [];
    for (let i = array.lengthj; i > 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

// 4. Slice
function slice(start, stop, array) {
    let arraySliced = []
    for (let i = start; i < stop; i++) {
        arraySliced.push(array[i]);
    }
    return arraySliced;
}

// 5.Concat
function concat(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
    return array1;
}

// 6.Join
function join(sep, array) {
    let joinedString = "";
    for (let i = 0; i < array.length; i++) {
        joinedString += `${array[i]}${sep}`;
    }
    return joinedString;
}

// 7. Max
function max(array) {
    let maxNum;
    for (let i = 0; i < array.length; i++) {
        if (maxNum < array[i]) {
            maxNum = array[i];
        }
    }
    return maxNum;
}
