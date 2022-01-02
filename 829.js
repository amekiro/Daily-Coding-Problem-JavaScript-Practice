const dataSet = (data) => {
    return {
        data,
        plus(key) {
            //console.time(`Time it takes to add ${key}`);

            if (Object.keys(this.data).indexOf(key) > -1) {
                // Key exists
                this.data[key]++;
            } else {
                // Key does not exist
                this.data[key] = 1;
            }

           // console.timeEnd(`Time it takes to add ${key}`);
        },
        minus(key) {
            //console.time(`Time it takes to remove ${key}`)

            if (Object.keys(this.data).indexOf(key) === -1) {
                //console.timeEnd(`Time it takes to remove ${key}`);
                return;
            }

            if (this.data[key] === 1) {
                delete this.data[key];
            } else {
                this.data[key]--;
            }

            //console.timeEnd(`Time it takes to remove ${key}`);
        },
        get_max() {
            //console.time("Time it takes to get maximum")

            let max = Object.entries(this.data).reduce((fin, val) => val[1] > fin[1] ? val : fin);

            //console.timeEnd("Time it takes to get maximum");

            return max[0];
        },
        get_min() {
            //console.time("Time it takes to get minimum")

            let min = Object.entries(this.data).reduce((fin, val) => val[1] < fin[1] ? val : fin);

            //console.timeEnd("Time it takes to get minimum");
            return min[0];
        }
    }
}

const testRun = (src) => {
    //console.log("Check for " + JSON.stringify(src.data));

    src.plus("new"); // Add for non-existing key

    let keys = Object.keys(src.data);
    keys = keys[Math.floor(Math.random() * keys.length)];
    //console.log("Add for " + keys);
    src.plus(keys); // Add for existing key

    //console.log(src);

    src.minus("unknown"); // Subtract for non-existing key

    keys = Object.entries(src.data).filter(x => x[1] === 1)[0][0];
    //console.log("Subtract for " + keys);
    src.minus(keys); // Subtract for key with 1 value

    keys = Object.entries(src.data).filter(x => x[1] > 1)[0][0];
    //console.log("Subtract for " + keys);
    src.minus(keys); // Subtract for key with value > 1
    
    //console.log(src);

    //console.log(src.get_max());
    //console.log(src.get_min());

    src.get_max();
    src.get_min();
}

// Generate large test cases
const testSet = (cap) => {
    const obj = {};

    for (let i = 1; i <= cap; i++) {
        obj[i] = Math.ceil(Math.random() * 10);
    }

    return obj;
}

const dataList = [dataSet(testSet(10)), dataSet(testSet(100)), dataSet(testSet(1000)), dataSet(testSet(10000))];
dataList.forEach((x, index) => {
    console.time(`Time for ${Object.keys(x.data).length} items`);

    testRun(x);

    console.timeEnd(`Time for ${Object.keys(x.data).length} items`);
})

// Individual test cases

/*const test = dataSet({
    test: 4,
    miso: 1,
    song: 9,
    3: 2
})*/

//test.plus("new"); // Test for non-existing key
//test.plus("miso"); // Test for existing key
//console.log(test);

//test.minus("new"); // Test for non-existing key
//test.minus("miso"); // Test for key with 1 value
//test.minus("test"); // Test for key with value > 1
//console.log(test);

//console.log(test.get_max());
//console.log(test.get_min());