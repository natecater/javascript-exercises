const reverseString = function(string) {
    splitString = [];

    splitString = string.split("");
    reverseArray = splitString.reverse();
    result = reverseArray.join("");

    return result;

};

// Do not edit below this line
module.exports = reverseString;
