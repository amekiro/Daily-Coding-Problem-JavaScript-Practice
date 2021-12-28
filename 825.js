const square = (arr) => {
    return arr.map(x => x * x).sort((a, b) => a - b);
}

const test = [-9, -2, 0, 2, 3];
console.log(square(test));