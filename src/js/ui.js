import editImage from '../resources/pen.svg';
import deleteImage from '../resources/dustbin.png';

const $taskContainer = document.body.querySelector('.container > .right-side-container > .tasks');
const $projectContainer = document.body.querySelector('.container > .left-side-container > .project-container > .projects');
const $addProjectForm = document.body.querySelector('.add-project-form');
const $addNewProjectButton = document.body.querySelector('.container > .left-side-container > ul > .add-project-btn');
$addProjectForm.remove();

function createProjectElement(project) {
    const $projectElement = document.createElement('li');
    $projectElement.innerHTML = `
        <span>${project.name}</span>
    `;
    return $projectElement;
}

function createTodoItemElement(todoItem) {
    const $todoItem = document.createElement('li');
    $todoItem.innerHTML = `
    <input type="checkbox">
        <p class="task-details">
            <span>${todoItem.name}</span><br>
            <span>${todoItem.description}</span>
        </p>
        <p class="date">Date</p>
        <img src="${editImage}" alt="Edit" class="edit-btn">
        <img src="${deleteImage}" alt="Delete" class="delete-btn">
    `;
    return $todoItem;
}

// index.js will pass the array of todo(s)/tasks to be rendered in the right side container and renderTasks function will render only those tasks
function renderTasks(todoList) {
    $taskContainer.innerHTML = ``;
    todoList.forEach(todoItem => {
        const $todoItemElement = createTodoItemElement(todoItem);
        $taskContainer.appendChild($todoItemElement);
    });
}

function renderProjects(projectList) {
    $projectContainer.innerHTML = '';
    projectList.forEach(project => {
        const $projectElement = createProjectElement(project);
        $projectContainer.appendChild($projectElement);
    })
}

function showAddProjectForm() {
    document.body.prepend($addProjectForm);
}

function hideAddProjectForm() {
    $addProjectForm.remove();
}

function setupEventListeners(handlers) {
    $addNewProjectButton.addEventListener('click', showAddProjectForm);

    $addProjectForm.querySelector('form > .submit-project-btn').addEventListener('click', (e) => {
        e.preventDefault();
        
        const projectName = $addProjectForm.querySelector('form > input[name="project-name"]').value;
        const projectDescription = $addProjectForm.querySelector('form > input[name="project-description"]').value;
        handlers.addProject(projectName, projectDescription);
        hideAddProjectForm();
    });
}

function updateUI(state) {
    renderTasks(state.tasks);
    renderProjects(state.projects);
}





export { setupEventListeners, updateUI };