const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const completedChecker = () => {
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', () => {
    const newTasks = tasks.filter((tasks) => tasks.completed === false);
    for (let i = 0; i < newTasks.length; i += 1) {
      newTasks[i].index = i;
    }
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    window.location.reload();
  });
};

export default completedChecker;