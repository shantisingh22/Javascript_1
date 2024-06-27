//(a) Define a variable named student and assign it an empty object.
let student={}

//(b) Add properties to the student object for name, email, and age. Set their values to your own name, email, and age.
student.name="Shanti";
student.email="shantisingh22@email.com";
student.age=15;

//(c) Log the name property of the student object to the console.
console.log(student.name);

//(d) Update the age property of the student object to some random value, say 10. Log the age property of the student object to the console to see the updated property.
student.age=10;
console.log(student.age);

//(e) Add a method called greet to the student object that logs a greeting message using the name property. Call the greet method to see the greeting message.
student.greet = function() { 
    console.log("Hello",student.name);
};
student.greet(); 

//(f) Create a new object inside the student object called address. Add properties to the address object for country, city, and pin_code. Set their values to your address details.
student.address = {
    country: "India",
    city: "Lucknow",
    pin_code: 234566,
};

//(g) Log the country property of the address object to the console.
console.log(student.address.country);

//(h) Update the pin_code property of the address object to a new pin code. Log the address object to the console to see the updated pin_code property.
student.address.pin_code = 120056;
console.log(student.address);

//(i) Create a new object named friend with the same properties as the student object, but with values representing a friend's name, email, age, and address. The object should also have the greet method. Call the greet method and also, log the friend object into the console.
let friend = {
    name: "Anmol Singh",
    email: "anmol@example.com",
    age: 22,
    address: {
        country: "India",
        city: "Bangalore",
        pin_code: 5604353,
    },
    greet: function() {
    console.log("hi", this.name);
    }
}
friend.greet();
console.log(friend);

//(j) Create a new object named topper with the same properties as the student object, but with values representing a topper’s name, email, age, and address.  The object should also have the greet method. Call the greet method and also, log the friend object into the console.

let topper = {
    name: "Ram",
    email: "ram@gmail.com",
    age: 23,
    address: {
        country: "India",
        city: "New York",
        pin_code: "10456"
    },
    greet: function() {
    console.log("hi", this.name);
    }
}
topper.greet();
console.log(topper);

//(k) [Class] Define a class called Student that takes parameters for name, email, age, country, city, and pin_code. Inside the class's constructor, set these parameters as properties of the new object. The country, city, and pin_code properties should be added inside the address object in a nested way. Make sure to add the greet method inside the class.
class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address ={
            country :country,
            city : city,
            pin_code : pin_code,
        }
    }
        greet(){
            console.log("hi", this.name);
        }
        //(l) Add a method called getFullAddress to the Student class that returns the full address of the student in this format (India, Bangalore - 560038)
        getFullAddress(){
            return (this.address.country+ "," + this.address.city + "," + this.address.pin_code);
    }
};
student = new Student("Priya", "priya2@gmail.com", 20, "India", "Lucknow", 234556);
console.log (student);

//(m)Create objects of the Student class for yourself, your friend, and another student. Log these objects to the console to see the created objects.
let myself = new Student("Shanti", "shanti@navgurukul.com", 25, "India", "Sitapur", 123456);
let myfriend = new Student("Shivani", "shivani@navgurukul.com", 24, "India", "Gajiyabaad", 723456);
let anotherStudent = new Student("Rani", "rani@navgurukul.com", 22, "India", "Golkunda", 34987);

console.log("myself:", myself);
console.log("myFriend:", myfriend);
console.log("anotherStudent:", anotherStudent);


//(f) Call the getFullAddress method on one of the Student objects and log the result to the console.
console.log(student.getFullAddress());



