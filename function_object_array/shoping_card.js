//(a) Define an array called cart containing several objects, each representing an item in the shopping cart. Each object should have properties such as name, price, and quantity.
let card = [
    {name:"product", price:10, quantity:1 },
    {name:"product1", price:20, quantity:2 },
    {name:"product2", price:30, quantity:3 },
];
//(b) Define a function called calculateTotalPrice() that takes the shopping cart array as input and returns the total price of all items in the shopping cart.
function calculateTotalPrice(card) {
    let totalPrice = 0;
    let i = 0;
    while (i < card.length) {
        totalPrice = totalPrice + card[i].price * card[i].quantity;
        i++;
    }
    return totalPrice;
}

//(c)Call the calculateTotalPrice() function with the cart array as an argument and log the result to the console.
let totalprice = calculateTotalPrice(card);
console.log(totalprice);

