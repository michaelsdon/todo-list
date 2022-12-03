import './style.css';
import Task from './module/task';
import Project from './module/project';
import ToDoList from './module/todolist';
import Edit from './images/edit.svg';
import Remove from './images/remove.svg';
import { te } from 'date-fns/locale';

class UI {
  constructor(toDo) {
    this.toDo = toDo;
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  }

  loadHomePage() {
    console.log('yeeee')
    const addProjectBtn = document.getElementById('add-project');
    const taskListDiv = document.getElementById('task-list');

    addProjectBtn.addEventListener('click', this.newProjectForm)

    this.updateProjects();
    this.updateTasks();

  }

  newProjectForm(e) {
    e.preventDefault();

    console.log('newProjectForm was run')
  }

  updateProjects() {

    const projectListDiv = document.getElementById('projects');

    for (const project of this.toDo.projects) {
      const projLab = this.createProjectLabel(project);
      projectListDiv.appendChild(projLab);
    }
  }

  removeProject(e) {
    const projectID = e.target.parentElement.firstChild.id;

    console.log(toDo.getOwnPropertyNames())
    // this.toDo.removeProject(projectID);
    // this.loadHomePage();
  }

  updateTasks() {
    const activeProject = this.toDo.getActiveProject();
    
    const taskHeader = document.getElementById('project-header');
    const highPriority = document.getElementById('high-priority');
    const regularPriority = document.getElementById('regular-priority');

    taskHeader.textContent = '';

    const projTitle = document.createElement('h2');
    const removeProj = document.createElement('img');
    const editProj = document.createElement('img');

    removeProj.src = Remove;
    editProj.src = Edit;

    projTitle.id = activeProject.id;

    removeProj.addEventListener('click', this.removeProject)

    removeProj.classList.add('project-icon');
    editProj.classList.add('project-icon');
    
    projTitle.textContent = activeProject.name;
    taskHeader.appendChild(projTitle);
    taskHeader.appendChild(editProj);
    taskHeader.appendChild(removeProj);

    for (const task of activeProject.tasks) {
      const taskLib = this.createTaskLabel(task);

      if (task.isHighPriority) {
        highPriority.appendChild(taskLib);
      } else {
        regularPriority.appendChild(taskLib);
      }
    }
  }

  createProjectLabel(project) {
    const projLab = document.createElement('div');
    const projLabL = document.createElement('div');
    const projLabR = document.createElement('div');
    const themeDot = document.createElement('span');
    const projTitle = document.createElement('h3');
    const projTaskNum = document.createElement('p');
  
    projLab.classList.add('nav-label');
    projLabL.classList.add('nav-label-left');
    projLabR.classList.add('nav-label-right');
    themeDot.classList.add('dot');
  
    projTitle.textContent = project.name;
    projTaskNum.textContent = project.tasks.length;
    
    themeDot.style.backgroundColor = project.theme;

    projLabL.appendChild(themeDot);
    projLabL.appendChild(projTitle);
    projLabR.appendChild(projTaskNum);
    projLab.appendChild(projLabL);
    projLab.appendChild(projLabR);

    return projLab;
  }

  createTaskLabel(task) {

    const mainLab = document.createElement('div');
    const taskDot = document.createElement('span');
    const taskInfo = document.createElement('div');
    const taskTitle = document.createElement('h4');
    const dueDateDiv = document.createElement('div');
    const dueDate = document.createElement('p');
    const desc = document.createElement('div');

    mainLab.classList.add('main-label');
    taskDot.classList.add('dot');
    taskDot.classList.add('task-dot');
    taskInfo.classList.add('task-info');
    desc.classList.add('task-description');

    mainLab.id = task.id;

    taskTitle.textContent = task.name;
    dueDate.textContent = task.dueDate;
    desc.textContent = task.description;

    dueDateDiv.appendChild(dueDate);
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(dueDateDiv);
    mainLab.appendChild(taskDot);
    mainLab.appendChild(taskInfo);
    mainLab.appendChild(desc);

    return mainLab;
  }

}



// Fake Data

let a = new Task('Michael', '2022-12-12', 'first task', false);
let b = new Task('Jonathan', '2022-12-13', 'second task', false);
let c = new Task('Loser', '2022-12-13', 'HP task', true);

let e = new Project('Project 1', 'red');
let f = new Project('Project 2', 'blue');
 
let g = new ToDoList()

g.addProject(e);
g.addProject(f);
e.addTask(a);
e.addTask(b);
e.addTask(c);


const ui = new UI(g);
ui.loadHomePage();


/*

ALL IN UI

loadHomePage
  call updateProjects
  call updateTasks


newProject
  open form to insert a project into this.toDo
  form attributes:
    name
    theme
  when submitted, new project is added to this.toDo
  

updateProjects
iterate over ToDoList Projects
  create Project Label

  









*/