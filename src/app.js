class TodoItem {
    constructor(name, description, dueDate, priorityLevel) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    update(properties) {
        const allowedProperties = ['name', 'description', 'dueDate', 'priorityLevel', 'completed'];
        for (const [key, value] of Object.entries(properties)) {
            if (allowedProperties.includes(key)) {
                this[key] = value;
            }
        }
    }

};

class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.items = [];
    }

    createTodoItem(name, description, dueDate, priorityLevel) {
        this.items.push(new TodoItem(name, description, dueDate, priorityLevel));
    }

    deleteTodoItem(index) {
        this.items.splice(index, 1);
    }

    update(properties) {
        const allowedProperties = ['name', 'description'];
        for (const [key, value] of Object.entries(properties)) {
            if (allowedProperties.includes(key)) {
                this[key] = value;
            }
        }
    }
}

const app = (function () {
    const projects = [];

    function createProject(name, description) {
        projects.push(new Project(name, description));
    }

    function getProjects() {
        return projects;
    }

    function deleteProject(index) {
        projects.splice(index, 1);
    }

    return { createProject, deleteProject, getProjects };
})();

export { app };