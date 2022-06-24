/*
  @author Peter Seboyeng
  Calculator exercise
*/

//addition.
const add=(num1,num2)=> num1+num2;

//subtraction.
const subtract=(num1,num2)=> num1 - num2;

//division.
const divider=(num1,num2)=> num1 / num2;

//multiplication.
const multiply=(num1,num2)=> num1 * num2;

//modulus.
const remainder=(num1,num2)=> num1 % num2;

//calculator function.
const calculator =(num1,num2,operator)=> operator(num1,num2);

//add values.
const resultAdd = calculator(12,62,add);
console.log(resultAdd);

//subract values.
const resultSubtract = calculator(15,2,subtract);
console.log(resultSubtract);

//multiply values.
const resultMultiply = calculator(45,89,multiply);
console.log(resultMultiply);

//compute remainder.
const resultRemainder = calculator(78,36,remainder);
console.log(resultRemainder);
