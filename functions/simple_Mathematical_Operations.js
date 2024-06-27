// (a) Create a callback function doubleNumber that takes a number and returns its double.
function doubleNumber(number){
    return  (number + number);
};

// (b) Create another callback function squareNumber that takes a number and returns its square.
function squareNumber (number){
    return (number * number);
};

//(c) Create another callback function incrementNumber that takes a number and returns the number incremented by one.
 function incrementNumber (number){
    return (number + 1);
 };
 
//(d) Define a function performOperation that accepts two parameters: num (a number on which to perform the operation), and operation (a callback function that specifies the operation to be performed on num). 
// Inside performOperation, call the operation function and pass num as an argument. 
//The function should return the result.
function performOperation(num, operation){
    return (operation(num));
};

//(e)Call performOperation with a number and each of the callback functions in turn to see the results of the operations. 
//Log the result to the console for each call to performOperation.
let double=performOperation(6,doubleNumber);
console.log(double);

let square= performOperation(2,squareNumber);
console.log (square)

let increment= performOperation(4,incrementNumber);
console.log (increment)


//Observe the higher-order function, performOperation, to understand why higher-order functions are used.

