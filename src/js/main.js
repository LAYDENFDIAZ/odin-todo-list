import { ProjectManager } from "./projectManager.js";
import { TodoManager } from "./todoManager.js";

const projectManager = new ProjectManager();
projectManager.createProject("Project 1", "Description 1");
projectManager.createProject("Project 2", "Description 2");

projectManager.renderProjects();

const todoManager = new TodoManager();

const ADD_TODO_BTN = document.querySelector(".add-todo");

ADD_TODO_BTN.addEventListener("click", () => {
  todoManager.renderTodoForm();
});
