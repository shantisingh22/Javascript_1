//(a) Define an array called inventory containing several objects, each representing a product in the store's inventory. Each object should have properties such as id, name, price, quantity, and any other relevant details.
let inventory=[];

//(b) Create a class called Product to represent a product, and use this class to create objects for each product in the inventory array.
class Product {
    constructor (id, name, price, quantity){
        this.id=id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
};

//(c) Define functions addProduct() to add a new product to the inventory, updateProduct() to update the quantity of an existing product, removeProduct() to remove a product from the inventory, and displayProducts() to display all the products in the current inventory in the following format: ProductName - Price (Quantity). Try to think of the function arguments on your own.

function addProduct(id, name, price, quantity){
    let add = new Product(id, name, price, quantity);
    inventory.push(add);
};
addProduct(11, "Laptop", 30, 2);
addProduct (12, "Phone", 40, 3);
addProduct (13, "LCD", 50, 4);
console.log(inventory);

function updateProduct(id, name, price, quantity, inventory) {
    let i = 0;
    while (i < inventory.length) {
        if (inventory[i].id === id) {
            inventory[i].name = name;
            inventory[i].price = price;
            inventory[i].quantity = quantity;
        }
        i++;
    }
}
updateProduct(12,"TabletPhone", 800, 30, inventory);
console.log(inventory);

function removeProduct(id, inventory){
    let i = 0;
    while (i < inventory.length){
        if (inventory[i].id === id){
            inventory.splice(i, 1);
        }
        i++;
    }
}
removeProduct (11, inventory);
console.log(inventory);

function displayProducts(){
    let i = 0;
    while (i< inventory.length){
        let display = inventory[i];
        console.log("name:",display.name + ", " + "price:",display.price + ", " + "quantity:",display.quantity);
        i++;
    }
}
displayProducts(); 


