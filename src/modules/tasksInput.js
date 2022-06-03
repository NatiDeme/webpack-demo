const tasksInput = () => {
  const tasksInput = document.createElement('div');
  tasksInput.innerHTML += `
    <form id="input-form" onsubmit="return false">
    <input type="text" placeholder="Add to your list..." id="input-field">
    </form>
    `;
  tasksInput.classList.add('task-input');
  return tasksInput;
};

export default tasksInput;