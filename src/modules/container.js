import footer from './footer.js';
import listOfTasks from './listOfTasks.js';
import tasksHeader from './tasksHeader.js';
import tasksInput from './tasksInput.js';

const container = () => {
  const container = document.createElement('div');
  container.classList.add('list-container');

  container.append(tasksHeader());
  container.append(tasksInput());
  container.append(listOfTasks());
  container.append(footer());
  return container;
};

export default container;