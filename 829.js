const dataSet = (data) => {
    return {
        data,
        plus(key) {
            console.time("Time it takes to add a key value")

            if (Object.keys(this.data).some(x => x === key)) {
                // Key exists
                this.data[key]++;
            } else {
                // Key does not exist
                this.data[key] = 1;
            }

            console.timeEnd("Time it takes to add a key value");
        },
        minus(key) {
            console.time("Time it takes to remove a key value")

            if (!Object.keys(this.data).some(x => x === key)) {
                return;
            }

            if (this.data[key] === 1) {
                delete this.data[key];
            } else {
                this.data[key]--;
            }

            console.timeEnd("Time it takes to remove a key value");
        },
        get_max() {
            console.time("Time it takes to get maximum")

            const arr = Object.entries(this.data).sort((a, b) => b[1] - a[1]);
            console.timeEnd("Time it takes to get maximum");

            return arr[0][0];
        },
        get_min() {
            console.time("Time it takes to minimum")

            const arr = Object.entries(this.data).sort((a, b) => a[1] - b[1]);
            console.timeEnd("Time it takes to minimum");

            return arr[0][0];
        }
    }
}

const testRun = (src) => {
    
}

const test = dataSet({
    test: 4,
    miso: 1,
    song: 9,
    3: 2
})

// Individually test code
//test.plus("new"); // Test for non-existing key
//test.plus("miso"); // Test for existing key
//console.log(test);

//test.minus("new"); // Test for non-existing key
//test.minus("miso"); // Test for key with 1 value
//test.minus("test"); // Test for key with value > 1
//console.log(test);

console.log(test.get_max());
console.log(test.get_min());