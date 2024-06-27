//(a) Define an array called tasks containing several objects, each representing a task in the to-do list.
let Task = [];

//(b) Create a class called Task to represent a task, and use this class to create objects for each task in the tasks array.
class Task1 {
    constructor (id, description, dueDate, status){
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status= status;
    }
}

//(c) Define functions addTask() to add a new task, updateTask() to update an existing task, removeTask() to remove a task, and displayTasks() to display all tasks in the following format: TaskDescription - DueDate (Status
function addTask(id, description, dueDate, status){
    let task = new Task1(id, description, dueDate, status);
    Task.push(task);
}
addTask (1, "hello my friend", "2/03/2003", "working");
addTask (2, "presentation", "3/04/2004", "not working");
addTask (3, "Complete project", "4/05/2005", "Complete");
//console.log(Task);

function updateTask(id, description, dueDate, status, Task){
    let i = 0;
    while (i < Task.length){
        if (Task[i].id === id){
            Task[i].description = description;
            Task[i].dueDate = dueDate;
            Task[i].status = status;
        }
        i++;
    }
}
updateTask(2, "competition", "6/06/2006", "complete project", Task);
//console.log(Task);


function removeTask(id, Task){
    let i = 0;
    while (i < Task.length){
        if (Task[i].id === id){
            Task.splice(i,1)
        }
        i++;
    }
}
removeTask(1,Task);
console.log(Task);

function displayTasks(){
    let i = 0;
    while (i < Task.length){
        let start= Task[i];
        console.log("description :", start.description + ", " + "dueDate:", start.dueDate + " ," + "status:",start.status);
        i++;
    }
}
displayTasks();
