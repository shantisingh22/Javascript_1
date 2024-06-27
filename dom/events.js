//(a) Create an HTML button element with some text. Using JavaScript, add a click event listener to the button that logs 
//"Button clicked!" to the console when clicked.

let button = document.getElementById("button-click");
button.addEventListener("click", function() {
    console.log("button clicked");
});

//(b) Create an HTML div element with some text. Using JavaScript, add a mouseover event listener to the 
//div that changes the text color of the div to red when the mouse is over it.
let text = document.getElementById("text");
text.addEventListener("mouseover", function() {
    text.style.color = "red";
    console.log("hello")
});


//(c) Create an HTML input element. Using JavaScript, add an input event listener to the input that logs 
//the input value to the console whenever it changes.
let input1 = document.getElementById("inputvalue");
input1.addEventListener("input", function() {
    console.log(input1.value,);
});

//(d) Create a <button> element and a <div> element. When the button is clicked, toggle the visibility of the <div> element.
//let toggle = document.getElementById("toggleButton")
//toggle.addEventListener("click", function() {
    //let div = document.getElementById("myDiv");
    //div.classList.toggle("hidden");
//});

document.getElementById('toggleButton').addEventListener('click', function() {
    let content = document.getElementById('content');
    content.classList.toggle('hidden');
  });