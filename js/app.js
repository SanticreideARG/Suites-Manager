const loginWindow = document.getElementById('login');
loginWindow.addEventListener('click',() =>{
  loginWindow.classList == 'login' ? 
  loginWindow.classList.replace('display-none','login') :
  loginWindow.classList.replace('login','display-none')
})
function login(){

}
//El TaskManager es un CRD sencillo para anotar tareas y eliminarlas luego de realizarlas.
//Hace usoo de Local Storage.
let taskmngrForm = document.getElementById("taskmngrForm");
let taskmngrOutput = document.getElementById("taskmngrOutput");

taskmngrForm.addEventListener("submit", (e)=>{
e.preventDefault();
let reserveInputs = e.target.children;
let output = reserveInputs[2].value;
createTask(output)
})
const createTask = (input) => {
  let task =  document.createElement('div');
  task.className = "cards";
  task.innerHTML = `<h4>${input}</h4>`;
  taskmngrOutput.appendChild(input);}