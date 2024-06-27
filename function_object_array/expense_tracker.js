//(a) Define an array called expenses containing several objects, each representing an expense. Each expense object should have properties such as id, name, amount, date, and any other relevant details.
let expenses = [];

//(b) Create a class called Expense to represent an expense, and use this class to create objects for each expense in the expenses array.
class Expense {
    constructor (id, name, amount, date){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
    }
};

//(c) Define functions addExpense() to add a new expense, updateExpense() to update an existing expense, removeExpense() to remove an expense, and displayExpenses() to display all expenses in the following format: ExpenseName - Amount (Date).

function addExpense(id, name, amount, date) {
    let start=new Expense(id, name, amount, date);
    expenses.push(start);
};
addExpense (1, "Shanti Singh", 45.000, "2/05/2023");
addExpense(2, "Manshi Singh", 30.000, "3/04/2024");
addExpense(3, "Anmol Pratap Singh", 50.000, "4/02/2022");
console.log(expenses);

function updateExpense(id, name, amount, date, expenses) {
    let i = 0;
    while (i < expenses.length) {
        if (expenses[i].id === id) {
            expenses[i].name = name;
            expenses[i].amount = amount;
            expenses[i].date = date;
        }
        i++; 
    }
}
updateExpense(2, "divya", 150.00, "2024-05-20", expenses);
console.log(expenses);

function removeExpense(expenses, id) {
    let i = 0;
    while (i < expenses.length) {
        if (expenses[i].id === id) {
            expenses.splice(i, 3);
        }
        i++;
    }
}
removeExpense(expenses, 3);
console.log(expenses);


function displayExpenses() {
    let i = 0;
    while (i < expenses.length) {
        let expense = expenses[i];
        console.log("name:", expense.name + ", " + "amount:", expense.amount + ", " + "date:", expense.date);
        i++;
    }
}
displayExpenses();

