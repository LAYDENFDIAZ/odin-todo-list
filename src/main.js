import { ProjectManager } from "./projectManager.js";
import { renderProjects, renderTodoForm } from "./ui.js";
import TodoManager from "./todoManager";

const projectManager = new ProjectManager();
projectManager.createProject("Project 1", "Description 1");
projectManager.createProject("Project 2", "Description 2");

renderProjects(projectManager);

const todoManager = new TodoManager();

const ADD_TODO_BTN = document.querySelector(".add-todo");

ADD_TODO_BTN.addEventListener("click", () => {
  todoManager.renderTodoForm();
});
