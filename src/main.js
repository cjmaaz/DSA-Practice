import './style.css'
import { display } from './utils/display.js'
import { runStackDemo } from './demos/stackDemo.js'
import { runQueueDemo } from './demos/queueDemo.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="sidebar">
      <h2>Data Structures</h2>
      <button id="clearOutput">Clear Output</button>
      <button id="stackDemo">Stack Demo</button>
      <button id="queueDemo">Queue Demo</button>
    </div>
    <div class="content">
      <h1>DSA Practice</h1>
      <div id="output"></div>
    </div>
  </div>
`

// Clear output
document.getElementById('clearOutput').addEventListener('click', () => {
  document.getElementById('output').innerHTML = '';
  display('Output cleared');
});

// Stack Demo
document.getElementById('stackDemo').addEventListener('click', runStackDemo);

// Queue Demo
document.getElementById('queueDemo').addEventListener('click', runQueueDemo);