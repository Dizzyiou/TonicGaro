// checks if cool menu is already open
const misccheck = document.getElementById('cool')
if (misccheck === undefined || misccheck === null) { // opens cool menu if it doesn't already exist

// drag code
function dragElement(e){var n=0,t=0,o=0,u=0;function l(e){(e=e||window.event).preventDefault(),o=e.clientX,u=e.clientY,document.onmouseup=m,document.onmousemove=d}function d(l){(l=l||window.event).preventDefault(),n=o-l.clientX,t=u-l.clientY,o=l.clientX,u=l.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function m(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=l:e.onmousedown=l}

// cool menu html and css
var coolmenu = document.createElement("div");
coolmenu.innerHTML = `<div id="miscmenu" class="miscmenu" style="min-height: 220px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 124px; height: 137px; background: rgb(30, 30, 30); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 104px; left: 577px; position:absolute; z-index: 99999;">
    <h1 class="title"><center>Misc</center>
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
</style>
    <button onclick="fetch('https://raw.githubusercontent.com/TonicGaro/TonicGaro/main/NullifyData/misc/cusback.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Custom Background</button>
    <br>
    <button onclick="window.open('https://docs.google.com/document/d/1w-uay3y5pwOm45sG9JqiSopKH9DO3pejABpUPBL-uiw/edit?usp=sharing', '_blank');" 
    class="button">Free i-Ready Games</button>
    <br>
    <br>
    <button onclick="fetch('https://raw.githubusercontent.com/TonicGaro/TonicGaro/main/NullifyData/misc/close.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Close</button>
    <br>
    <br>
    <br>
    <br>
</div>`

// specifies element to drag
dragElement(coolmenu.firstElementChild);
document.body.appendChild(coolmenu);
} else { // prevents cool menu from opening if its already open
  console.log('Misc Menu is already open.')
}