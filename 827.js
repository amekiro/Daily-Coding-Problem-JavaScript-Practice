const towerRange = (listeners, towers) => {
    const finalDist = [0]; // 0 is added for cases where all listeners are at the same location as the tower
    let compDist = [];
    let listLoc;

    for (let i = 0; i < towers.length; i++) {
        compDist = [];

        if (i === 0) {
            // Check for first listener
            listLoc = listeners.filter(loc => loc < towers[i]);
            if (listLoc.length > 0) {
                // If a listener exists
                finalDist.push(towers[i] - Math.min(...listLoc));
            }
        }

        if (i === towers.length - 1) {
            // Check for last listener

        }

        // Check between towers
    }

    return finalDist; //Math.max(...finalDist);
}

const listeners = [1, 5, 7, 11, 20];
const towers = [4, 8, 15];

console.log(towerRange(listeners, towers));