const footer = () => {
  const footer = document.createElement('div');
  footer.innerHTML += `
    <p>clear all completed</p>
    
    `;
  footer.classList.add('footer');
  return footer;
};

export default footer;