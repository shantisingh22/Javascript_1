//(a) Define a variable named temperatures and assign it an array containing several temperature readings in Celsius (e.g., -3, 14, 22, 5, -10).
let temperatures=[1, 2, 3, 4, 6, 5];

//(b) Use the forEach method to iterate over the temperatures array and log each temperature to the console. Rewrite the callback function passed to the foreach function as an arrow function.
temperatures.forEach(function(temperature){
    console.log(temperatures);
});

temperatures.forEach(temperature => console.log(temperatures));


//(c) Use the forEach method to iterate over the temperatures array and convert each temperature to Fahrenheit using the formula (temperature * 9/5) + 32. Log each converted temperature to the console. Rewrite the callback function passed to the foreach function as an arrow function.
temperatures.forEach(function(temperature){
    let Fahrenheit = (temperature * 9/5) + 32;
    console.log(Fahrenheit)
});

temperatures.forEach(temperature =>{
    let Fahrenheit = (temperature * 9/5) + 32;
    console.log(Fahrenheit)
});

//(d) Use the map method to create a new array called temperaturesInFahrenheit that contains the Fahrenheit equivalent of each temperature in the temperatures array. Log the temperaturesInFahrenheit array to the console. Rewrite the callback function passed to the map function as an arrow function.
let temperaturesInFahrenheit=temperatures.map(function(temperature){
   return (temperature * 9/5) + 32;
});

let temperaturesInFahrenheit = temperatures.map(temperature => (temperature * 9/5) + 32);
console.log(temperaturesInFahrenheit);

//(e) Use the filter method to create a new array called belowFreezing that contains only the temperatures from the temperatures array that are below 0°C. Log the belowFreezing array to the console. Rewrite the callback function passed to the filter function as an arrow function.
let belowFreezing = temperatures.filter(function(temperature){
    return temperature < 0;
});

let belowFreezing = temperatures.filter(temperature => temperature < 0);
console.log(belowFreezing);




