//(a) Define an array called inventory containing several objects, each representing a book in the bookstore's inventory. Each book object should have properties such as id, title, author, price, quantity, and any other relevant details.
let inventory = [];
//(b) Create a class called Book to represent a book, and use this class to create objects for each book in the inventory array.
class Book {
    constructor (id, title, auther, price, quantity){
        this.id = id;
        this.title = title;
        this.auther = auther;
        this.price = price;
        this.quantity = quantity;
    }
};

//(c) Define functions addBook() to add a new book to the inventory, updateBook() to update the quantity of an existing book, removeBook() to remove a book from the inventory, and displayBooks() to display all books in the current inventory in the following format: BookTitle - Price (Quantity).

function addBook(id, title, auther, price, quantity){
    let add = new Book (id, title, auther, price, quantity);
    inventory.push(add);
};
addBook(5, "kindal", "rskinbond", 400, 2);
addBook(6, "five point someone", "Chatan", 500, 1);
addBook(7, "magicpot", "jone", 300, 3);
//console.log(inventory);

function updateBook(id, title, auther, price, quantity) {
    let i = 0;
    while (i < inventory.length) {
        if (inventory[i].id === id) {
            inventory[i].quantity = quantity;
        }
        i++;
    }
}
updateBook(6, 1000)
//console.log(inventory);

function removeBook(id, inventory){
    let i = 0;
    while (i < inventory.length){
        if (inventory[i].id === id){
            inventory.splice(i,1)
        }
        i++;
    }
}
removeBook(5, inventory);
//console.log(inventory);

function displayBooks(){
    let i = 0; 
    while (i < inventory.length){
        let start = inventory[i];
        console.log("Title:",start.title + " ," + "auther:", start.auther + " ," + "price:", start.price + ", " + "quantity:", start.quantity)
        i++;
    }
}
displayBooks();

