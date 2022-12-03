export default class ToDoList {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(id) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id === id) {
        this.projects.splice(i, 1);
        break;
      }
    }
  }

  addFromJSON(id) {
    console.log('This functionality is not yet ready');
  }

  getActiveProject() {

    if (this.projects.length > 0) {
      let activeProject = null;
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].isActive) {
          return this.projects[i];
        }
      }
  
      this.setActiveProject(this.projects[0].id)
      return this.projects[0]
    }

    return null;
  }

  setActiveProject(id) {

    if (this.projects.length > 0) {
      for (let i = 0; i < this.projects.length; i++) {
        this.projects[i].isActive = false;
      }
  
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].id === id) {
          this.projects[i].isActive = true;
        }
      }
    }
  }
}