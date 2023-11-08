const TODOS = document.querySelector(".todo-container");

export class TodoManager {
  constructor() {
    this.todos = [];
    this.currentTodoIndex = null;
  }

  renderTodoForm() {
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

  renderTodos(index, project) {
    if (index !== null && project) {
      TODOS.innerHTML = `<div class="w-3/4 mx-auto bg-gray-300 p-4 rounded">
      <div class="todoListHeader">
      <h2 class="text-2xl font-bold mb-4">${project.name}</h2>
  
      <button class="add-todo bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4">
          Add Todo
      </button>
      </div>
  
      <ul class="divide-y divide-gray-200">
      ${project.todos
        .map(
          (todo, index) => `
        <li class="project p-8 rounded h-7 bg-blue-500 flex items-center justify-between text-white cursor-pointer">
            <p class="text-sm font-medium">
               ${todo.title} <!-- Use appropriate property from your Todo object -->
            </p>
            <p class="text-sm">
                ${todo.description} <!-- Use appropriate property from your Todo object -->
            </p>
        </li>
        `
        )
        .join("")}
      </ul>
      </div>`;
    } else {
      TODOS.innerHTML = "No project selected.";
    }
  }

  renderTodoForm() {}
}
