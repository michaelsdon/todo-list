import myFunction from './second.js';
import './style.css';

myFunction();

function component() {
  const element = document.createElement('div');
  element.textContent = "Webpack Starter Kit";
  element.classList.add('starter');

  return element;
}

document.body.appendChild(component());