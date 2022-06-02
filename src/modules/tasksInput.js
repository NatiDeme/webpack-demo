const tasksInput = () => {
  const tasksInput = document.createElement('div');
  tasksInput.innerHTML += `
    <input type="text" placeholder="Add to your list...">
    
    `;
  tasksInput.classList.add('task-input');
  return tasksInput;
};

export default tasksInput;