class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes = "",
    checklist = []
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }

  addChecklistItem(item) {
    this.checklist.push(item);
  }
}

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.todos = ["FDASF"];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

const SIDEBAR = document.querySelector(".projects-container");
const ADD_PROJECT_BTN = document.querySelector(".add-project");
const ADD_TODO_BTN = document.querySelector(".add-todo");
const TODOS = document.querySelector(".todo-container");

class ProjectManager {
  constructor() {
    this.projects = [];
    this.currentProjectIndex = null;
  }

  renderProjectForm() {
    SIDEBAR.innerHTML = `
      <div class="w-3/4 mx-auto bg-gray-300 p-4 rounded">

          <h2 class="text-2xl font-bold mb-4">Add Project</h2>

          <form class="flex flex-col">

              <label for="name" class="text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" class="mb-4">

              <label for="description" class="text-sm font-medium mb-2">Description</label>
              <textarea id="description" name="description" class="mb-4"></textarea>

              <button class="add-project bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4">
                  Add Project
              </button>
          </form>
      </div>
      
    `;

    const addProjectButton = document.querySelector(".add-project");
    addProjectButton.addEventListener("click", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const description = document.getElementById("description").value;
      this.createProject(name, description);
      this.renderProjects();
    });
  }

  createProject(name, description) {
    const project = new Project(name, description);
    this.projects.push(project);
    return project;
  }

  modifyProject(newName, newDescription) {}

  renderProjects() {
    SIDEBAR.innerHTML = `
      <div class="w-3/4 mx-auto bg-gray-300 p-4 rounded">
          <h2 class="text-2xl font-bold mb-4">Projects</h2>
          <ul class="divide-y divide-gray-200">
          ${this.projects
            .map(
              (project, index) => `
              <li class="project p-8 rounded h-7 bg-blue-500 flex items-center justify-between text-white cursor-pointer">
                  <p class="text-sm font-medium">
                      ${project.name}
                  </p>
                  <p class="text-sm">
                      ${project.description}
                  </p>
              </li>
              `
            )
            .join("")}
          </ul>
      </div>
      
      <button class="add-project bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4">
        Add Project
      </button>
    `;

    const Project = document.querySelector(".project");

    Project.addEventListener("click", () => {
      this.renderTodos();
    });

    const addProjectButton = document.querySelector(".add-project");
    addProjectButton.addEventListener("click", () => {
      this.renderProjectForm();
    });

    const projectItems = SIDEBAR.querySelectorAll("li");
    projectItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.currentProjectIndex = index;
        this.renderTodos();
      });
    });
  }

  renderTodos() {
    TODOS.innerHTML = `<div class="w-3/4 mx-auto bg-gray-300 p-4 rounded">
    <div class="todoListHeader">
    <h2 class="text-2xl font-bold mb-4">${
      this.projects[this.currentProjectIndex].name
    }</h2>

    <button class="add-todo bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4">
        Add Todo
    </button>
    </div>
  


    <ul class="divide-y divide-gray-200">
    ${this.projects[this.currentProjectIndex].todos
      .map(
        (todo, index) => `
      <li class="project p-8 rounded h-7 bg-blue-500 flex items-center justify-between text-white cursor-pointer">
          <p class="text-sm font-medium">
             fdsfs
          </p>
          <p class="text-sm">
              gfsdg
          </p>
      </li>
      `
      )
      .join("")}
    </ul>
    </div>
    `;
  }
}

function renderTodoForm() {
  TODOS.innerHTML = `
    <div class="w-3/4 mx-auto bg-gray-300 p-4 rounded">
        <h2 class="text-2xl font-bold mb-4">Add Todo</h2>

        <form class="flex flex-col">

            <label for="title" class="text-sm font-medium mb-2">Title</label>
            <input type="text" id="title" name="title" class="mb-4">

            <label for="description" class="text-sm font-medium mb-2">Description</label>
            <textarea id="description" name="description" class="mb-4"></textarea>

            <label for="dueDate" class="text-sm font-medium mb-2">Due Date</label>
            <input type="date" id="dueDate" name="dueDate" class="mb-4">

            <label for="priority" class="text-sm font-medium mb-2">Priority</label>
            <select id="priority" name="priority" class="mb-4">
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
            </select>

            <label for="notes" class="text-sm font-medium mb-2">Notes</label>
            <textarea id="notes" name="notes" class="mb-4"></textarea>

            <label for="checklist" class="text-sm font-medium mb-2">Checklist</label>
            <input type="text" id="checklist" name="checklist" class="mb-4">
            <button class="add-checklist-item bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4">
                Add Checklist Item
            </button>

            <button class="add-todo bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4">
                Add Todo
            </button>
        </form>
    </div>
    
  `;
}

class TodoManger {
  constructor() {
    this.todos = [];
    this.currentTodoIndex = null;
  }
}

const projectManager = new ProjectManager();
projectManager.createProject("Project 1", "Description 1");
projectManager.createProject("Project 2", "Description 2");
projectManager.renderProjects();

ADD_PROJECT_BTN.addEventListener("click", () => {
  projectManager.renderProjects();
});

ADD_TODO_BTN.addEventListener("click", () => {
  projectManager.renderTodoForm();
});
