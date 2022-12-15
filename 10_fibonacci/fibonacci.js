const fibonacci = function(num) {
    let n = parseInt(num);
    if (n < 0) return "OOPS";
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
