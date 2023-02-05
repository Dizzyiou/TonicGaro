const nullcheck = document.getElementById('GUI')
if (nullcheck === undefined || nullcheck === null) { // checks if nullify is already open

// sets min farmer to disable on startup
togglemin = 1;

// checks if a lesson is open
if (window['html5Iframe'] === undefined || window['html5Iframe'] === null) {

// drag gui code, dont't bother trying to decipher it lmao
function dragElement(e){var n=0,t=0,o=0,u=0;function l(e){(e=e||window.event).preventDefault(),o=e.clientX,u=e.clientY,document.onmouseup=m,document.onmousemove=d}function d(l){(l=l||window.event).preventDefault(),n=o-l.clientX,t=u-l.clientY,o=l.clientX,u=l.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function m(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=l:e.onmousedown=l}

// gui html and css
var UI = document.createElement("div");
UI.innerHTML = `<div id="GUI" class="GUI" style="min-height: 180px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 124px; height: 137px; background: rgb(30, 30, 30); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 104px; left: 577px; position:absolute; z-index: 99999;">
    <div class="image">
    <img src="https://res.cloudinary.com/dodofguiy/image/upload/c_scale,w_24/v1671071889/icon_f6pwnj.png" class="center">
    <h1 class="title"><center>Nullify</center>
    </h1>
<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Poppins&display=swap");

.title {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    padding: 5px;
}
.button {
  font-family: "Poppins", sans-serif;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  background-color: rgb(30,30,30);
}
.button:hover {
  background-color: rgb(50,50,50);
}
.button:active {
  opacity: 0;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
    <button onclick="fetch('https://raw.githubusercontent.com/TonicGaro/TonicGaro/main/NullifyData/hecks/skip.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Skip Lesson</button>
    
    <button onclick="fetch('https://raw.githubusercontent.com/TonicGaro/TonicGaro/main/NullifyData/hecks/minfarm.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Min Farmer</button>
    
    <button onclick="fetch('https://raw.githubusercontent.com/TonicGaro/TonicGaro/main/NullifyData/hecks/timer.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Timer</button>
    <br>
    <br>
    <button onclick="fetch('https://raw.githubusercontent.com/TonicGaro/TonicGaro/main/NullifyData/misc/misc.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Misc</button>
    <br>
    <br>
    <br>
    <br>
</div>`

// specifies element to drag
dragElement(UI.firstElementChild);
document.body.appendChild(UI);

// hides gui
function hideGui() {
  var x = document.getElementById("GUI");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyH' || event.metaKey) {
    hideGui()
  }
});

// app 21 chunk override
const originalScript = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/2/static/js/app-21.chunk.js";
const modifedScript = "https://raw.githubusercontent.com/TonicGaro/TonicGaro/main/NullifyData/appchunk/app-21.chunk.js";
const scriptLocationOnLoad = document.scripts[12].src;

// override app-12.chunk.js to add custom hooks
if (scriptLocationOnLoad == originalScript) { //checks if the script has already been loaded, if it has page gets reloaded
    try { nullifyModal("Error!", "Please run Nullify before opening lessons.", goToDashboard) } 
    catch (error) { alert('Please run Nullify before opening lessons. Reloading...'), location.reload() }
} else {
    //override the script
    fetch(modifedScript).then(r => r.text()).then(r => eval(r))
}
} else { // reloads i-ready if a lesson is detected
  alert('Please run Nullify before opening lessons. Reloading...'), location.reload()
}
} else { // prevents nullify from opening if it's already open
  console.log('Nullify is already open.')
}
  
