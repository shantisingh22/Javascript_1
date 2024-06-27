// (a) Define a function called calculateArea that takes two parameters, width and height, and returns the area of a rectangle (width * height).
function calculateArea(width, height) {
    return width * height;
};

// (b) Call the calculateArea function with width = 5 and height = 10, and log the result to the console.
let area = calculateArea(5, 10)
console.log(area);

// (c) Modify the calculateArea function to have a default value of 1 for both width and height. This means that if no arguments are provided, the function should return 1.
function calculateArea(width=1, height=1){
    return width * height;
};
area = calculateArea(5,10)
console.log(area);
area = calculateArea()
console.log(area);

// (d) Rewrite the calculateArea function as a function expression and store it in a variable called calculateAreaFunction.
let calculateAreaFunction = function(width,height){
    return width * height;
};
area = calculateAreaFunction (5,6);
console.log(area);

// (e) Rewrite the calculateArea function as an arrow function.
let calculateAreaArrowFunction = (width,height) => {
    return width * height;
}
area = calculateAreaArrowFunction (5,6);
console.log(area);


