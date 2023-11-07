class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.todos = [];
  }
}

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

const SIDEBAR = document.querySelector(".projects-container");
const ADD_PROJECT_BTN = document.querySelector(".add-project");
const TODOS = document.querySelector(".todo-container");
const projects = [];

ADD_PROJECT_BTN.addEventListener("click", renderProjectForm);

function renderProjectForm() {
  SIDEBAR.innerHTML = `
      <div class="w-3/4 mx-auto bg-gray-300 p-4 rounded">
        <h2 class="text-2xl font-bold mb-4">Create a New Project</h2>
        <form id="project-form">
          <div class="mb-4">
            <label for="project-name" class="block text-sm font-medium text-gray-700">Project Name:</label>
            <input type="text" id="project-name" required class="mt-1 p-2 rounded border w-full">
          </div>
          <div class="mb-4">
            <label for="project-description" class="block text-sm font-medium text-gray-700">Description:</label>
            <textarea id="project-description" required class="mt-1 p-2 rounded border w-full h-24"></textarea>
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Create Project
          </button>
        </form>
      </div>
    `;

  const projectForm = document.getElementById("project-form");
  projectForm.addEventListener("submit", createProject);
}

function renderTodoForm() {
  TODOS.innerHTML = `
    <div class="w-3/4 mx-auto bg-gray-300 p-4 rounded">
        <h2 class="text-2xl font-bold mb-4">Create a New Todo</h2>
        <form id="todo-form">
            <div class="mb-4">
                <label for="todo-title" class="block text-sm font-medium text-gray-700">Title:</label>
                <input type="text" id="todo-title" required class="mt-1 p-2 rounded border w-full">
            </div>
            <div class="mb-4">
                <label for="todo-description" class="block text-sm font-medium text-gray-700">Description:</label>
                <textarea id="todo-description" required class="mt-1 p-2 rounded border w-full h-24"></textarea>
            </div>
            <div class="mb-4">
                <label for="due-date" class="block text-sm font-medium text-gray-700">Due Date:</label>
                <input type="date" id="due-date" required class="mt-1 p-2 rounded border w-full">
            </div>
            <div class="mb-4">
                <label for="priority" class="block text-sm font-medium text-gray-700">Priority:</label>
                <select id="priority" required class="mt-1 p-2 rounded border w-full">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="notes" class="block text-sm font-medium text-gray-700">Notes:</label>
                <textarea id="notes" class="mt-1 p-2 rounded border w-full h-24"></textarea>
            </div>
            <div class="mb-4">
                <label for="checklist" class="block text-sm font-medium text-gray-700">Checklist:</label>
                <textarea id="checklist" class="mt-1 p-2 rounded border w-full h-24"></textarea>
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Create Todo
            </button>
        </form>
    </div>
  `;

  const todoForm = document.getElementById("todo-form");
  todoForm.addEventListener("submit", createTodo);
}

function createProject(e) {
  e.preventDefault();
  const projectName = document.getElementById("project-name").value;
  const projectDescription = document.getElementById(
    "project-description"
  ).value;
  const project = new Project(projectName, projectDescription);
  projects.push(project);
  renderProjects();
}

function renderProjects() {
  SIDEBAR.innerHTML = `
    <div class="w-3/4 mx-auto bg-gray-300 p-4 rounded">
        <h2 class="text-2xl font-bold mb-4">Projects</h2>
        <ul class="divide-y divide-gray-200">
        ${projects
          .map(
            (project, index) => `
            <li class="projectpy-4">
                <div class="flex justify-between">
                <p class="text-sm font-medium text-gray-900">
                    ${project.name}
                </p>
                <p class="text-sm text-gray-500">
                    ${project.description}
                </p>
                </div>
            </li>
            `
          )
          .join("")}
        </ul>
    </div>
    `;

  const projectItems = SIDEBAR.querySelectorAll("li");
  projectItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      renderTodos(index);
    });
  });

  ADD_PROJECT_BTN.addEventListener("click", renderProjectForm);
}

function renderTodos(index) {
  TODOS.innerHTML = `
    <div class="w-3/4 mx-auto bg-gray-300 p-4 rounded">
        <div class="flex justify-between mb-4">
        <h2 class="text-2xl font-bold mb-4">Todos</h2>
        <button class="add-todo bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Add Todo
        </button>
        </div>
        <ul class="divide-y divide-gray-200">
        ${projects[index].todos
          .map(
            (todo, index) => `
            <li class="projectpy-4">
                <div class="flex justify-between">
                <p class="text-sm font-medium text-gray-900">
                    ${todo.title}
                </p>
                <p class="text-sm text-gray-500">
                    ${todo.description}
                </p>
                </div>
            </li>
            `
          )
          .join("")}
        </ul>
    </div>
    `;

  const ADD_TODO_BTN = document.querySelector(".add-todo");
  ADD_TODO_BTN.addEventListener("click", renderTodoForm);
}
