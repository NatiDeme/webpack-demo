const removeTask = () => {
  const prevTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const allDeleteIcons = document.querySelectorAll(".deleted");
  if (allDeleteIcons.length) {
    allDeleteIcons.forEach((d) => {
      d.addEventListener("click", () => {
        const idArray = d.id.split("");
        const id = idArray[idArray.length - 1];
        const newTasks = prevTasks.filter(
          (task) => task.index.toString() !== id
        );
        for (let m = 0; m < newTasks.length; m += 1) {
          newTasks[m].index = m;
        }
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        window.location.reload();
      });
    });
  }
};

export default removeTask;
