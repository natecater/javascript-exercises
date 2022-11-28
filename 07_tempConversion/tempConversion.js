const convertToCelsius = function(fahr) {

  let cels = (5/9 * (fahr - 32));
  let result = Math.round(cels * 10) / 10;
  return result;
};

const convertToFahrenheit = function(cels) {


  let fahr = ((cels * 1.8) + 32);
  let result = Math.round(fahr * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
