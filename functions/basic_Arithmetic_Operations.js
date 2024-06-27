//(a) Add: Create a callback function addNumbers that takes two numbers and returns their sum.
function addNumbers (num1,num2){
    return (num1+num2);
};

//(b) Multiply: Create a callback function multiplyNumbers that takes two numbers and returns their product.
function multiplyNumbers(num1,num2){
     return (num1*num2);
};

//(c) Subtract: Create a callback function subtractNumbers that takes two numbers and returns the result of subtracting the second number from the first.
function subtractNumbers(num1,num2){
    return (num1-num2);
};

//(d) Divide: Create a callback function divideNumbers that takes two numbers and returns the result of dividing the first number by the second, ensuring to handle division by zero.
function divideNumbers(num1,num2){
    if (num2===0){
        return "Division by 0 not possible";
    }else {
        return (num1 / num2);
    }
};

//(e) Define a function performArithmetic that accepts three parameters: num1 and num2 (the numbers on which to perform the operation), and operation (a callback function that specifies the arithmetic operation to be performed on num1 and num2).
function performArithmetic (num1,num2,operation ){
    return operation(num1, num2);
};

//(f) Call performArithmetic with different pairs of numbers and each of the callback functions to see the results of the arithmetic operations.
let Addition = performArithmetic(5, 3, addNumbers);
console.log(Addition);

let Subtraction = performArithmetic(5, 3, subtractNumbers);
console.log(Subtraction);

let Multiplication = performArithmetic(5, 3, multiplyNumbers);
console.log(Multiplication);

let Division = performArithmetic(5, 3, divideNumbers);
console.log(Division);
