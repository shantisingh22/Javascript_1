// a Define a function called greet that takes a name as an argument and returns a greeting message. For example, if the name is "Alice", the function should return "Hello, Alice!".
function greet(name){
    return ("Hello, " + name + "!")
};

// b Call the greet function you defined in the previous task with your name as the argument and log the result to the console.
let r = greet("Priya")
console.log(r);

// c Modify the greet function to have a default argument of "Guest" for the name parameter. This means that if no name is provided, the function should return "Hello, Guest!".
function greet_default(name = "Guest" ) {
    return "Hello,"+ name +"!";
};
r =  greet_default()
console.log(r);
r =  greet_default("Manshi")
console.log(r);

// d Rewrite the greet function as a function expression and store it in a variable called greetFunction.
let  greetFunction = function(name="Guest"){
    return "Hello,"+"name"+"!";
};
r = greetFunction()
console.log(r);

// e Rewrite the greet function as an arrow function.
let greet_arrow = (name="Shanti") => {
    return "Hello, " + name + "!";
};
r = greet_arrow("Rani")
console.log(r);

