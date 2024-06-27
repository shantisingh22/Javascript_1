//(a) Define a variable named products and assign it an array containing several objects. Each object should represent a product and have properties like id, name, price, and category.
let products = [
    { id: 1, name: "Apple", price: 2, category: "Food" },
    { id: 2, name: "Book", price: 12, category: "company12" },
    { id: 3, name: "Milk", price: 3, category: "Food" },
    { id: 4, name: "Pen", price: 7, category: "company" },
    { id: 5, name: "Bread", price: 10, category: "Food" }
];


//(b) Use the forEach method to iterate over the products array and log each product's name and price to the console.
products.forEach (product => {
    console.log("products:", product.name + ", " + "price:",product.price);
});


//(c) Assume a tax rate of 10%. Use the map method to create a new array called productsWithTax that includes each product's name and a new price which is the original price plus the tax. Log the productsWithTax array to the console.
let taxRate = 0.1;
let productsWithTax = products.map(product => ({
  name: product.name,
  priceWithTax: product.price * (1 + taxRate)
}));
console.log(productsWithTax);


//(d) Use the filter method to create a new array called foodProducts that contains only the products from the category "Food". Log the foodProducts array to the console.
// Sample array of products
let foodProducts = products.filter(product => product.category === 'Food');
console.log(foodProducts);


//(e) Use filter to find products with a price under $10, then map to return a string for each that includes the name and price (e.g., "Banana - $1.99"). Store these strings in an array called affordableProducts and log it to the console.
let affordableProducts = products
    .filter(product => product.price < 10) 
    .map(product => product.name + " , " + product.price); 
console.log(affordableProducts);


//(e) Initialize a variable totalPrice to 0. Use forEach to sum up the prices of all products and update totalPrice. Log totalPrice after the loop.
let totalPrice = 0;
products.forEach(product => {
  totalPrice += product.price;  
});
console .log("TotalPrice", totalPrice);

