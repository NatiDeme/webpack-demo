import container from './modules/container.js';
import './style.css';
import addTask from './modules/addTasks.js';
import completedChecker from './modules/completedChecker.js';

const app = () => {
  const main = document.getElementById('main');
  main.append(container());
};

app();
addTask();
completedChecker();