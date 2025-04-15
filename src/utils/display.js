// Utility function to display output on the DOM
export function display(content, type = 'default') {
  const outputDiv = document.getElementById('output');
  const element = document.createElement('div');

  element.className = `output-item ${type}`;
  element.innerHTML = typeof content === 'object'
    ? JSON.stringify(content, null, 2)
    : String(content);
  outputDiv.appendChild(element);

  // Scroll to the bottom
  outputDiv.scrollTop = outputDiv.scrollHeight;
}