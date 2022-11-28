const sumAll = function(start, end) {

    if (!Number.isInteger(start) ||
        !Number.isInteger(end)  ||
        start < 0 || end < 0){
        return "ERROR";
    };

    sum = 0;
    
    if (start > end) {
        counter = start;
        while (counter >= end) {
            sum += counter;
            counter--;
        }

    } else {
        counter = end;
        while (counter >= start) {
            sum += counter;
            counter--;
        }
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
