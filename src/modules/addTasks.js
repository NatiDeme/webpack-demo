import tasks from './tasks.js';

const addTask = () => {
  const prevTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const inputForm = document.getElementById('input-form');
  const input = document.getElementById('input-field');
  const checkBox = document.querySelectorAll('.checkbox');
  const allDeleteIcons = document.querySelectorAll('.deleted');
  const allEditIcons = document.querySelectorAll('.edited');
  inputForm.addEventListener('submit', () => {
    const taskInput = {
      description: input.value,
      completed: false,
      index: prevTasks.length,
    };
    tasks.push(taskInput);
    prevTasks.push(taskInput);
    localStorage.setItem('tasks', JSON.stringify(prevTasks));
    window.location.reload();
  });

  const changeStyle = (id) => {
    const me = document.getElementById(`task${id}`);
    const editIcon = document.getElementById(`edit${id}`);
    const deleteIcon = document.getElementById(`delete${id}`);
    if (prevTasks[id].completed === false) {
      me.style.textDecoration = 'none';
      deleteIcon.style.display = 'none';
      editIcon.style.display = 'block';
    } else {
      me.style.textDecoration = 'line-through';
      editIcon.style.display = 'none';
      deleteIcon.style.display = 'block';
    }
    localStorage.setItem('tasks', JSON.stringify(prevTasks));
  };

  const changeTaskStat = (id) => {
    if (prevTasks[id].completed === false) {
      prevTasks[id].completed = true;
    } else {
      prevTasks[id].completed = false;
    }
    changeStyle(id);
  };

  if (checkBox.length) {
    checkBox.forEach((i) => {
      i.addEventListener('click', () => {
        changeTaskStat(i.id);
      });
    });
  }

  if (allEditIcons.length) {
    allEditIcons.forEach((z) => {
      z.addEventListener('click', () => {
        const idArray = z.id.split('');
        const id = idArray[idArray.length - 1];
        const listEdit = document.getElementById(`task${id}`);
        listEdit.contentEditable = true;
        listEdit.style.border = '1px solid black';
        listEdit.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            prevTasks[id].description = e.target.innerText;
            localStorage.setItem('tasks', JSON.stringify(prevTasks));
            window.location.reload();
          }
        });
      });
    });
  }

  if (allDeleteIcons.length) {
    allDeleteIcons.forEach((d) => {
      d.addEventListener('click', () => {
        const idArray = d.id.split('');
        const id = idArray[idArray.length - 1];
        const newTasks = prevTasks.filter((task) => task.index.toString() !== id);
        for (let m = 0; m < newTasks.length; m += 1) {
          newTasks[m].index = m;
        }
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        window.location.reload();
      });
    });
  }

  if (prevTasks !== null) {
    for (let j = 0; j < prevTasks.length; j += 1) {
      if (prevTasks[j].completed === true) {
        const me = document.getElementById(`task${prevTasks[j].index}`);
        const checkedInput = document.getElementById(`${prevTasks[j].index}`);
        const editIcon = document.getElementById(`edit${prevTasks[j].index}`);
        editIcon.style.display = 'none';
        checkedInput.checked = true;
        me.style.textDecoration = 'line-through';
      } else {
        const deleteIcon = document.getElementById(`delete${prevTasks[j].index}`);
        deleteIcon.style.display = 'none';
      }
    }
  }
};
export default addTask;