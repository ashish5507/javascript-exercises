const add = function(a,b) {
  return (a+b);
};

const subtract = function(a,b) {
  return (a-b);
};

const sum = function(arr) {
  let ans = 0;
  for(let a of arr){
    ans+=a;
  }
  return ans;
};

const multiply = function(arr) {
  let ans = 1;
  for(let i of arr){
    ans = ans*i;
  }
  return ans;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  let ans = 1;
  for(let i = a; i>0; i--){
    ans = ans*i;
  }
  return ans;
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
