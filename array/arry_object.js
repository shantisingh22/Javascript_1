//(a) Use the typeof operator to check the type of colors array and console it.
colors = ['red', 'green', 'blue'];
console.log(typeof colors);

//(b) Log the length property of the colors array to the console to see the number of elements in the array.
console.log(colors.length)
//(c) Use the push method to add another color to the end of the colors array.
colors.push("yellow");
console.log(colors)
//(d) Use the pop method to remove the last color from the colors array.
removedColor = colors.pop();
console.log(removedColor)
//(e) Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.
indexOf = colors.indexOf('blue');
console.log(indexOf)
//(f) Add a property to the colors array called owner and set its value to your name. Log the colors array to see if the owner property is added.

colors.woner=("Priya Singh")
console.log(colors)
//(g)Use a for...in loop to iterate over the properties of the colors array and log each property name and the associated value to the console.
for (let key in colors) {
    // Check if the property is not inherited
    if (colors.hasOwnProperty(key)) {
        console.log(key + ": " + colors[key]);
    }
}
