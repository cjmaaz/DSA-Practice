import './style.css'
import { display } from './utils/display.js'
import { runBasicStackDemo, runBracketMatcherDemo } from './demos/stackDemo.js'
import { runBasicQueueDemo, runPrinterQueueDemo } from './demos/queueDemo.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="sidebar">
      <h2>Data Structures</h2>
      <button id="clearOutput">Clear Output</button>
      
      <div class="dropdown">
        <button onclick="this.nextElementSibling.classList.toggle('show')" class="dropbtn">Stack Demos</button>
        <div class="dropdown-content">
          <button id="basicStackDemo">Basic Stack</button>
          <button id="bracketMatcherDemo">Bracket Matcher</button>
        </div>
      </div>
      
      <div class="dropdown">
        <button onclick="this.nextElementSibling.classList.toggle('show')" class="dropbtn">Queue Demos</button>
        <div class="dropdown-content">
          <button id="basicQueueDemo">Basic Queue</button>
          <button id="printerQueueDemo">Printer Queue</button>
        </div>
      </div>
    </div>
    <div class="content">
      <h1>DSA Practice</h1>
      <div id="output"></div>
    </div>
  </div>
`

// Close dropdowns when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let dropdown of dropdowns) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
}

// Clear output
document.getElementById('clearOutput').addEventListener('click', () => {
  document.getElementById('output').innerHTML = '';
  display('Output cleared');
});

// Stack Demos
document.getElementById('basicStackDemo').addEventListener('click', runBasicStackDemo);
document.getElementById('bracketMatcherDemo').addEventListener('click', runBracketMatcherDemo);

// Queue Demos
document.getElementById('basicQueueDemo').addEventListener('click', runBasicQueueDemo);
document.getElementById('printerQueueDemo').addEventListener('click', runPrinterQueueDemo);