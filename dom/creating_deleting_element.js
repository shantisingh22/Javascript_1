//(a) Create an HTML file with a <ul> element (empty or with some list items). Using JavaScript, 
//add a new <li> element to the <ul> with the text "New Item".
// Adding a new <li> element to the <ul> with the text "New Item"
let newItem1 = document.createElement("li");
newItem1.textContent = "New Item";
document.getElementById("list1").appendChild(newItem1);

//(b) In the same HTML file, add a <ul> element containing several <li> items. Using JavaScript, 
//remove the first <li> item from the <ul>.
document.getElementById("list2").firstElementChild.remove();