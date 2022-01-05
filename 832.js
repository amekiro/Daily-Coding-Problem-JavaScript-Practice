const getArrLen = arr => {
    let arrHold = [];
    let arrLen = 0;

    for (let i = 0; i < arr.length; i++) {
        let pos = arrHold.indexOf(arr[i])
        if (pos > -1) {
            // Value was identified
            arrHold = arrHold.splice(pos + 1);
        }

        arrHold.push(arr[i]);
        //console.log(arrHold);

        arrLen = Math.max(arrLen, arrHold.length);
    }

    return arrLen;
}

const test = [5, 1, 3, "5", 2, "3", 4, -1, 1];
console.log(getArrLen(test));