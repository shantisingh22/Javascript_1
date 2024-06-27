//(a) Define the Employee Class. The class should take parameters for name, email, age, department, position, and salary. Inside the constructor method, set these parameters as properties of the employee object.
class Employee {
    constructor(name, email, age, department, position, salary) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }
    //(b) Add a method named introduce() inside the class that logs a greeting with the employee's name and position, e.g., "Hello, I am Sam, Software Developer".
    introduce() {
        console.log("Hello, I am "+ this.name + ' , ' + this.position); 
    };
    //(c) Add a method named displaySalary() inside the class that logs the employee's salary formatted as a string, e.g., "Salary: $5000".
    displaySalary() {
        console.log(`"Salary: ${this.salary}"`); 
    };
};

//(d) Create an object named newEmployee with properties representing a new employee's name, email, age, department, position, and salary. Log this object to the console.
let newEmployee = new Employee("Jane", "jane@example.com", 25, "IT","Software Developer", 45000);
console.log(newEmployee);

//(e) Create another object named manager with properties representing a manager. Log this object to the console.
let manager = new Employee("Johnson", "johnson@example.com", 40, "Operations","Manager", 75000);
console.log(manager);

//(f) On the newEmployee object, call the introduce() method to see a greeting and role.
newEmployee.introduce(); 

//(g) Call the displaySalary() method on the manager object to log the salary details.
manager.displaySalary(); 

