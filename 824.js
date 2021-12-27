const tree = (value, left, right) => {
    return {
        value,
        left,
        right
    }
}

const mergeTwo = (tree1, tree2) => {
    let direction = ["left", "right"];
    let currNode = [tree1, tree2]; // current node getting referenced
    let final = tree(currNode[0].value + currNode[1].value, null, null); // Get first node
    const parentList = [[currNode, final]];

    while (parentList.length > 0) {
        for (let i = 0; i < 2; i++) {
            // For loop to cover right and left
            /*console.log("Check between trees:");
            console.log(parentList[0][0][0]);
            console.log(parentList[0][0][1]);*/

            currNode = [
                parentList[0][0][0] ? parentList[0][0][0][direction[i]] : null,
                parentList[0][0][1] ? parentList[0][0][1][direction[i]] : null
            ];
            
            if (currNode[0] && currNode[1]) {
                parentList[0][1][direction[i]] = tree(parentList[0][0][0][direction[i]].value + parentList[0][0][1][direction[i]].value, null, null);
            } else if (currNode[0]) {
                // Only tree 1 has value
                parentList[0][1][direction[i]] = tree(parentList[0][0][0][direction[i]].value, null, null);
            } else if (currNode[1]) {
                // Only tree 2 has value
                parentList[0][1][direction[i]] = tree(parentList[0][0][1][direction[i]].value, null, null);
            }

            if (currNode[0] || currNode[1]) {
                parentList.push([currNode, parentList[0][1][direction[i]]]);
            }
        }

        parentList.shift();
    }

    return final;
}

const testGrp1 = {
    value: 3,
    left: {
        value: 2,
        left: {
            value: 5,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        }
    },
    right: {
        value: 1,
        left: {
            value: 8,
            left: {
                value: 3,
                left: null,
                right: null
            },
            right: {
                value: 2,
                left: null,
                right: {
                    value: 3,
                    left: {
                        value: 5,
                        left: null,
                        right: {
                            value: 2,
                            left: {
                                value: 9,
                                left: {
                                    value: 3,
                                    left: null,
                                    right: null
                                },
                                right: null
                            },
                            right: {
                                value: 7,
                                left: null,
                                right: null
                            }
                        }
                    },
                    right: null
                }
            }
        },
        right: null
    }
}

const testGrp2 = {
    value: 6,
    left: {
        value: 8,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    },
    right: {
        value: 8,
        left: null,
        right: {
            value: 1,
            left: {
                value: 3,
                left: {
                    value: 9,
                    left: {
                        value: 1,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 3,
                        left: null,
                        right: null
                    }
                },
                right: {
                    value: 3,
                    left: null,
                    right: null
                }
            },
            right: null
        }
    }
}

console.log(JSON.stringify(mergeTwo(testGrp1, testGrp2), null, 4));