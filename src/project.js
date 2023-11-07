export class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}
