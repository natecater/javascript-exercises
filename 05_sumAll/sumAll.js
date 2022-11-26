const sumAll = function(start, end) {

    if (start.isInteger() || end.isInteger()) {
        
    };

    counter = end;
    
    if (start > end) {
        counter = start;
    }
    
    sum = 0;

    while (counter >= start) {
        sum += counter;
        counter--;
    }

    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
