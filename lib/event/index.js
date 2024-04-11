const finderHTML = `
  <div id="finder">
    <div class="tree">

    </div>
    <div onmousedown="resizeFinder(event)" id="resizer">
      
    </div>
  </div> 
`
const canvasHTML = `<canvas height="800" width="1000"/>`

const parser = new DOMParser();

const root = document.body
const finder = parser.parseFromString(finderHTML, 'text/html').getElementsByTagName('div')[0];

// init
root.appendChild(finder);
root.addEventListener('mousemove', monolithCoordinate); 
root.addEventListener('mouseup', monolithLetGo);

let resizing = false;

console.log(root)

function monolithCoordinate(event){
  console.log(resizing)
  if (resizing) {
    const resizer = document.getElementById('resizer');
    const finder = document.getElementById('finder');
    resizer.classList.add("resizable")
    finder.style.width = event.clientX + "px"
  }
}

function monolithLetGo(){
  if (resizing) {
    const resizer = document.getElementById('resizer');
    resizer.classList.remove("resizable")
    resizing = false
  }
}

function resizeFinder(event){
  resizing = true;
  console.log("clicked")
}