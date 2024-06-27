
//(a) Define a variable named fruits and assign it an array containing the names of several fruits (e.g., "apple", "banana", "cherry", "date").
fruits=["apple","banana","chery","date"];

//(b) Use the forEach method to iterate over the fruits array and log each fruit name capitalized to the console (e.g., "Apple", "Banana", "Cherry", "Date"). Rewrite the callback function passed to the foreach function as an arrow function.
fruits.forEach(fruit => {
    let capitalized =fruit[0].toUpperCase() + fruit.slice(1);
    console.log(capitalized);
});

//(c) Use the map method to create a new array called reversedFruits that contains each fruit name reversed (e.g., "elppa"). Log the reversedFruits array to the console. Rewrite the callback function passed to the map function as an arrow function.
let reversedFruits=fruits.map(fruit =>{
    let reverse=""
    for (i=fruit.length-1; i>=0; i--){
        reverse=reverse+fruit[i];
    }
    return reverse;
});
console.log(reversedFruits);

//(d) Use the filter method to create a new array called longFruits that contains only the fruit names that have more than 5 characters. Log the longFruits array to the console. Rewrite the callback function passed to the filter function as an arrow function.
let longFruits=fruits.filter(fruit =>fruit.length>=5);
console.log(longFruits);

//(e) Use filter to find fruits that contain the letter 'a', and then map to return these fruits in uppercase. Store the result in an array called aFruitsUpper and log it to the console.
let aFruitsUpper= fruits
    .filter(fruit => fruit.includes("a"))
    .map( fruit => fruit.toUpperCase());
console.log(aFruitsUpper);


//(g) Initialize a variable totalCharacters to 0. Use forEach to add up the number of characters in each fruit name and update totalCharacters. Log totalCharacters after the loop.
let totalCharacters =0;
    fruits.forEach(fruit =>{
    totalCharacters=totalCharacters+fruit.length;
});
console.log(totalCharacters);
