const { v4: uuidv4 } = require('uuid');

export default class Project {
  constructor(name, theme, tasks=[]) {
    this.name = name;
    this.theme = theme;
    this.tasks = tasks;
    this.isActive = false;
    this.id = uuidv4();
  }

  updateName(name) {
    this.name = name;
  }

  updateTheme(theme) {
    this.theme = theme;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskID) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (taskID === this.tasks[i].id) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }
}