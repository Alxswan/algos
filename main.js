//Check Prime
var isPrime = function(n) {
  var divisor = 2;

  while (n > divisor){
    if (n % divisor == 0){
      return false
    }
    else
      divisor++
  }
  return true
}

//Prime Factors
var primeFactors = function(n) {
  var factors = [];
  var divisor = 2;
  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    }
    else {
      divisor ++
    }
  }
  return factors;
}

//All Factors
var allFactors = function(n) {
  var factors = [];
  var divisor = 2;

  while (divisor <= n){
    if (n % divisor == 0) {
      factors.push(divisor)
    }
    divisor ++
  } 
  return factors;
}


