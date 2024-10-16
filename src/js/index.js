import "../styles.css"
import {app} from "./app";
import { renderTasks } from "./dom";


app.createProject('General', 'This is the project for the tasks not associated with any other tasks');
const generalTasks = app.getProjects()[0];
generalTasks.createTodoItem('Task1', 'Description of Task2', 'dueDate', 'priorityLevel');
generalTasks.createTodoItem('Task2', 'Description of Task1', 'dueDate', 'priorityLevel');
generalTasks.createTodoItem('Task3', 'Description of Task3', 'dueDate', 'priorityLevel');
generalTasks.createTodoItem('Task4', 'Description of Task4', 'dueDate', 'priorityLevel');

renderTasks(generalTasks['items']);

// app.createProject("Sample Project", "This is a sample project description");
// app.createProject("Sample Project2", "This is a sample project description");
// app.createProject("Sample Project3", "This is a sample project description");

// console.log(app.getProjects());

// let projects = app.getProjects();
// projects[0].createTodoItem('sample todo item1', 'sample descp', "sample date", 3);
// projects[0].createTodoItem('sample todo item2', 'sample descp', "sample date", 3);
// projects[0].createTodoItem('sample todo item3', 'sample descp', "sample date", 3);

// console.log(app.getProjects());


// console.log('removing second todo item');
// projects[0].deleteTodoItem(1);
// console.log(app.getProjects());

// console.log('after changing the name of first todo item');

// projects[0].items[0].update({
//     name: 'new name of first todo list',
//     priorityLevel: 'new priority level'
// })
// console.log(app.getProjects());

// console.log('changing the name of the second project');
// projects[1].update({
//     name:'New Project Name of second project'
// })
// console.log(app.getProjects());
