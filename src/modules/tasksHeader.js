const tasksHeader = () => {
    const tasksHeader = document.createElement('div');
    tasksHeader.innerHTML += `
    <p>Today's to dos</p>
    <i class="fa fa-refresh" aria-hidden="true"></i>
    `;
    tasksHeader.classList.add('list-header');
return tasksHeader;
}

export default tasksHeader;