//(a) Create an HTML form element with an input and a submit button. Using JavaScript, add a submit event listener to the form that prevents the default form submission and logs "Form submitted!" to the console.
let form1 = document.getElementById("myForm");
form1.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submitted");
});

//(b) Create an HTML file with a <div> element. Using JavaScript, add a mousemove event listener to the <div> element that displays the current mouse coordinates (x, y) inside the <div> as the mouse moves.
let mouseCoordinatesDiv = document.getElementById('mouseCoordinates');
mouseCoordinatesDiv.addEventListener('mousemove', function(event) {
    let rect = mouseCoordinatesDiv.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    mouseCoordinatesDiv.textContent = 'Mouse Coordinates: (' + mouseX + ', ' + mouseY + ')';
});
  
//(c) Create an HTML file with multiple <p> elements, each containing different text. Using JavaScript, add a mouseover event listener to each <p> element that changes the text color of that particular paragraph to red when the mouse is over it.
let paragraph1 = document.getElementById("paragraph1");
paragraph1.addEventListener("mouseover", function() {
    paragraph1.style.color = "red";
});

let paragraph2 = document.getElementById("paragraph2");
paragraph2.addEventListener("mouseover", function() {
    paragraph2.style.color = "red";
});

let paragraph3 = document.getElementById("paragraph3");
paragraph3.addEventListener("mouseover", function() {
    paragraph3.style.color = "red";
});

//(d) Create an HTML file with multiple <div> elements, each containing different text. Using JavaScript, add a click event listener to each <div> element that toggles the background color of that particular <div> between red and white.
const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.addEventListener('click', function() {
      if (this.style.backgroundColor === 'red') {
        this.style.backgroundColor = 'white';
      } else {
        this.style.backgroundColor = 'red';
      }
    });
  });

//(e) Create a <div> element and four buttons. Each button corresponds to a color: red, yellow, blue, and green. When a button is clicked, the background color of the <div> changes to the color of the button. By default, the background color of the <div> is white.
let button1 = document.getElementById("red");
button1.addEventListener("click", function() {
    document.getElementById("colorDiv").style.backgroundColor = "red";
});

let button2 = document.getElementById("yellow");
button2.addEventListener("click", function() {
    document.getElementById("colorDiv").style.backgroundColor = "yellow";
});

let button3 = document.getElementById("blue");
button3.addEventListener("click", function() {
    document.getElementById("colorDiv").style.backgroundColor = "blue";
});

let button4 = document.getElementById("green");
button4.addEventListener("click", function() {
    document.getElementById("colorDiv").style.backgroundColor = "green";
});

//(f) Create a <div> and four buttons. Each button represents a font size: Small, Medium, Large, Extra Large. When a button is clicked, the font size of the <div> changes to the corresponding size. By default, the font size of the <div> is medium.
let textdiv = document.getElementById('text');

let smallButton = document.getElementById('small');
smallButton.addEventListener('click', function() {
    textdiv.style.fontSize = 'small';
});

let mediumButton = document.getElementById('medium');
mediumButton.addEventListener('click', function() {
    textdiv.style.fontSize = 'medium';
});
        
let largeButton = document.getElementById('large');
largeButton.addEventListener('click', function() {
    textdiv.style.fontSize = 'large';
});

let xlargeButton = document.getElementById('xlarge');
xlargeButton.addEventListener('click', function() {
    textdiv.style.fontSize = 'x-large';
});

