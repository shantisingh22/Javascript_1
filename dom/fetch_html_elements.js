//Create an HTML file with a <div> element that has an ID attribute set to "myDiv" and contains the text "Hello, World!". Using JavaScript, 
//fetch the element with the ID "myDiv" and log its content to the console.

const id1 = document.getElementById("myDiv");
//console.log(myDiv.textContent);


//In the same HTML file, add two or more <div> elements that have the same class "myClass" but contain different text. Using JavaScript, fetch all the elements with the class "myClass" and log their contents to the console.
//with the class "myClass" and log their contents to the console.


const elements = document.getElementsByClassName('myClass');
let i = 0;
while (i < elements.length) {
  console.log(elements[i].textContent);
  i++;
}

//In the same HTML file, add two or more <p> elements, each containing different text. Using JavaScript, fetch all the <p> elements and 
//log their contents to the console.


const paragraphs = document.getElementsByTagName('p');
i = 0;
while (i < paragraphs.length) {
  console.log(paragraphs[i].textContent);
  i++;
}


//Query Selector: In the same HTML file, add a <div> element that has an ID attribute set to "anotherDiv" and contains the text "Hello, World!", 
//and a <p> element with a class attribute set to "anotherClass" and contains the text "Paragraph". Using JavaScript, fetch the <div> element using the ID selector 
//(#anotherDiv) and log its contents to the console. Then, fetch the <p> element using the class selector (.anotherClass) and log its contents to the console.

const anotherDivelement = document.querySelector("anotherDiv");
console.log (anotherDivelement.textContent);

const anotherParagraphElement = doucument.queryselector("anotherCalss");
console.log(anotherParagraphElement.textConetent);
