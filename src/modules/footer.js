const footer = () => {
  const footer = document.createElement('div');
  footer.innerHTML += `
    <button class="clearButton" id="clear"><p>clear all completed</p></button>
    
    `;
  footer.classList.add('footer');
  return footer;
};

export default footer;