import editImage from '../resources/pen.svg';
import deleteImage from '../resources/dustbin.png';
const $taskContainer = document.body.querySelector('.container > .right-side-container > .tasks')


// index.js will pass the array of todos/tasks to be rendered in the right side container and renderTasks function will render only those tasks
function renderTasks(todoList) {
    todoList.forEach(todoItem => {
        const $todoItem = document.createElement('li');

        const $checkBox = document.createElement('input');
        $checkBox.type = 'checkbox';

        const $taskDetailParagraph = document.createElement('p');
        $taskDetailParagraph.classList.add('task-details');

        const $taskNameBox = document.createElement('span');
        $taskNameBox.textContent = todoItem['name'];

        const $taskDescriptionBox = document.createElement('span');
        $taskDescriptionBox.textContent = todoItem['description'];

        $taskDetailParagraph.append($taskNameBox, document.createElement('br'), $taskDescriptionBox);

        const $date = document.createElement('p');
        $date.classList.add('date');
        $date.textContent = 'Date';

        const $editButton = document.createElement('img');
        $editButton.src = editImage;

        const $deleteButton = document.createElement('img');
        $deleteButton.src = deleteImage;

        $todoItem.append($checkBox, $taskDetailParagraph, $date, $editButton, $deleteButton);

        $taskContainer.append($todoItem);
    });
}

export { renderTasks };