import './style.css'
import { display } from './utils/display.js'
import { runTestBasicStack, runTestBalancedParentheses, runTestInfixToPostfix } from './demos/stackExamplePkg.js'


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
          <button id="basicValidParantheses">Basic Valid Parantheses</button>
          <button id="basicInfixToPostfix">Basic Infix To Postfix</button>
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
document.getElementById('basicStackDemo').addEventListener('click', runTestBasicStack);
document.getElementById('basicValidParantheses').addEventListener('click', runTestBalancedParentheses);
document.getElementById('basicInfixToPostfix').addEventListener('click', runTestInfixToPostfix);