import './style.css'
import { display } from './utils/display.js'
import runBasicStackDemo from './demos/stack/basicStack.js'


document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="sidebar">
      <h2>Data Structures</h2>
      <button id="clearOutput">Clear Output</button>
      <!-- Stack -->
      <div class="dropdown">
        <button onclick="this.nextElementSibling.classList.toggle('show')" class="dropbtn">Stack</button>
        <div class="dropdown-content">
          <button id="basicStackDemo">Basic Stack</button>
        </div>
      </div>
    </div>
    <div class="content">
      <h1>DSA Practice</h1>
      <div id="output"></div>
    </div>
  </div>
`

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let dropdown of dropdowns) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById('clearOutput').addEventListener('click', () => {
  document.getElementById('output').innerHTML = '';
  display('Output cleared');
});

// Stack Demos
document.getElementById('basicStackDemo').addEventListener('click', runBasicStackDemo);