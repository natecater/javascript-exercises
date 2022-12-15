const add = function(a, b) {
	return a + b;
};

const subtract = function(b, a) {
	return b - a;
};

const sum = function(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++){
    result += numbers[i];
  }
  return result;
};

const multiply = function(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let result = 1;
  let temp;
	if (n == 0) {
    result = 1;
  } else {
    while (n > 1) {
      result *= n;
      n -= 1;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
