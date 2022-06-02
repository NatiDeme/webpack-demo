import tasks from "./tasks.js"
const listOfTasks = () => {
    const listOfTasks = document.createElement('div');
    const tasksUl = document.createElement('ul');
    let tasksElement = ''
    for(let i=0;  i< tasks.length; i++){
        tasksElement  += `
        <li>
          <div>
            <input type="checkbox">
            ${tasks[i].description}
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </li>
    `;
    }
    tasksUl.innerHTML= tasksElement
    listOfTasks.classList.add('list');
    tasksUl.className = 'lists'
    listOfTasks.append(tasksUl)

return listOfTasks;
}

export default listOfTasks;