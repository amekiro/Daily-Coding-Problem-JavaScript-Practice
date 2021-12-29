const towerRange = (listeners, towers) => {
    const finalDist = [0]; // 0 is added for cases where all listeners are at the same location as the tower
    let listLoc;

    listeners = listeners.sort((a, b) => a - b);
    towers = towers.sort((a, b) => a - b);

    for (let i = 0; i < towers.length; i++) {
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
            listLoc = listeners.filter(loc => loc > towers[i]);
            if (listLoc.length > 0) {
                // If a listener exists
                finalDist.push(Math.max(...listLoc)- towers[i]);
            }
        } else {
            // Check between towers
            listLoc = listeners.filter(loc => towers[i] < loc && loc < towers[i + 1]);
            if (listLoc.length === 1) {
                // Only 1 listener in range
                finalDist.push(Math.min(listLoc[0] - towers[i], towers[i + 1] - listLoc[0]));
            } else if (listLoc.length > 1) {
                // More than 1 listener in range
                let compDist = [0];
                let half = ((towers[i + 1] - towers [i]) / 2) + towers[i];

                // Check after first tower
                compDist.push(Math.max(...listeners.filter(loc => towers[i] < loc && loc <= half)) - towers[i]);

                // Check before second tower
                compDist.push(towers[i + 1] - Math.min(...listeners.filter(loc => half <= loc && loc < towers[i + 1])));

                finalDist.push(Math.max(...compDist));
            }
        }
    }

    return Math.max(...finalDist);
}

const listeners = [2, 6, 12, 14, 15, 20, 8, 30];
const towers = [6, 14, 20, 3, 22, 28, 10, 35];

console.log(towerRange(listeners, towers));