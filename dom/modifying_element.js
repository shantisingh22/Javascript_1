//(a) Create an HTML file with a <p> element containing some text. Using JavaScript, change the text content of the <p> element to "New Text".
document.getElementById("myParagraph").textContent = "My name is Shanti Singh";


//(b) Create an HTML file with a <div> element containing some text. Using JavaScript, change the HTML content of the <div> element to <b>New Text</b>.
document.getElementById("myDiv").innerHTML = "I am from up";

//(c) Create an HTML file with a <p> element with ID attribute set to "myParagraph". Using JavaScript, change the font color of the <p> element to red.

document.getElementById("myparagraph11").innerHTML = "textred";

//(d) Create an HTML file with an <a> element with href attribute set to "https://www.google.com/". 
//Using JavaScript, change the href attribute of the <a> element to "https://www.facebook.com/".

document.getElementById("myLink").href = "https://www.facebook.com/";

//(e) Create an HTML file with a <div> element containing some text. In the CSS, define a style for the "myClass" class that sets the font color to red. 
//Using JavaScript, add a class attribute to the <div> element with the value "myClass" so that the text in the <div> element appears red in color.

document.getElementById("mydiv").classList.add("myClass");
