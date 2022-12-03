const { v4: uuidv4 } = require('uuid');

export default class Task {
  constructor(name, dueDate, description, isHighPriority) {
    this.name = name;
    this.dueDate = dueDate;
    this.description = description;
    this.isHighPriority = isHighPriority;
    this.id = uuidv4();
  }

  updateName(name) {
    this.name = name;
  }

  updateDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  updateDescription(description) {
    this.description = description;
  }

  updateHighPriority(isHighPriority) {
    this.isHighPriority = isHighPriority;
  }

}