const removeFromArray = function(arr, ...elements) {

    result = [];
    result = arr;

    for (let element of elements) {
        for (let i = 0; i < result.length; i++) {
            if (element === result[i]) {
                arr.splice(i, 1);
            }
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
