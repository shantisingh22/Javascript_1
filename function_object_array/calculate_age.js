//(a) Define an array called people containing several objects, each representing a person. Each object should have properties such as name, and age.
let people=[
    {name:"Priya",age:30},
    {name:"Rani", age:25},
    {name:"Manshi", age:12}
];

//(b) Define a function called calculateAverageAge() that takes the people array as input and returns the average age of all the people in the array.
function calculateAverageAge(people) {
    if (people.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let person of people) {
        sum += person.age;
    }
    let averageAge = sum / people.length;
    return averageAge;
};

//(c) Call the calculateAverageAge() function with the people array as an argument and log the result to the console.
let averageAge = calculateAverageAge(people);
console.log(averageAge);
