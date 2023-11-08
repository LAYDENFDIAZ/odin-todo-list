import { ProjectManager } from "./projectManager.js";
import { TodoManager } from "./todoManager.js";

const projectManager = new ProjectManager();
const todoManager = new TodoManager();

projectManager.createProject("Default", "THIS IS THE DEFAULT PROJECT");
projectManager.createProject("Project 2", "Description 2");

projectManager.renderProjects();

const ADD_TODO_BTN = document.querySelector(".add-todo");
const SIDEBAR = document.querySelector(".projects-container");
