//(a) Use a for loop to iterate over the colors array and log each color to the console.

let colors = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//(b) Use a while loop to iterate over the colors array and log each color to the consol
let colorss = ["red", "green", "blue", "yellow"];
let i = 0;
while (i < colorss.length) {
  console.log(colorss[i]);
  i = i + 1;
}

//(c) Use a for...of loop to iterate over the colors array and log each color to the console.
let colors1=["red","green","blue","yellow"];
for(let color of colors1){
  console.log(color)
}
