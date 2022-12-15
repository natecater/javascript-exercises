const palindromes = function (word) {
    let stripped = word.replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, "").toLowerCase();
    let split = stripped.split("");
    let reversed = split.reverse();
    let joined = reversed.join("");

    return (stripped === joined) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
