// import tasks from './tasks.js';
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const listOfTasks = () => {
  const listOfTasks = document.createElement('div');
  const tasksUl = document.createElement('ul');
  let tasksElement = '';
  if (tasks !== null) {
    for (let i = 0; i < tasks.length; i += 1) {
      tasksElement += `
            <li class="each-tasks" id="list${tasks[i].index}" class="taskContainer${tasks[i].index}">
              <div class="task-holder">
                <input type="checkbox" id="${tasks[i].index}" class="checkbox">
               <p id="task${tasks[i].index}" class="tasks"> ${tasks[i].description} </p>
              </div>
              <div>
              <button class="edited" id="edit${tasks[i].index}"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
              <button class="deleted" id="delete${tasks[i].index}"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
            </li>
        `;
    }
  }
  tasksUl.innerHTML = tasksElement;
  listOfTasks.classList.add('list');
  tasksUl.className = 'lists';
  listOfTasks.append(tasksUl);

  return listOfTasks;
};

export default listOfTasks;