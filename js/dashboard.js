//Administrador de la botonera en la primer seccion del Dashboard



//Administrador del Widget del Clima en la segunda seccion del Dashboard

let smaWheatherDiv = document.getElementById('smaWheather');
let chapWheatherDiv = document.getElementById('chapWheather');
let nqnWheatherDiv = document.getElementById('nqnWheather');


const getData = async () => {
    try {
      const respuesta = await fetch(
        "https://ws.smn.gob.ar/map_items/weather/"
      );
      const data = await respuesta.json();
      console.log(data);
         smaWheatherDiv.innerHTML = 
         `<h4>Clima en ${data[10].name}</h4>
         <p>${data[10].weather.description}</p>    
          <p>Temperatura: ${data[10].weather.temp}ºC</p>    
          <p>Humedad: ${data[10].weather.humidity}%</p>    
          <p>Velocidad del viento: ${data[10].weather.wind_speed}</p> 
         `;
         chapWheatherDiv.innerHTML = 
         `<h4>Clima en ${data[9].name}</h4>
         <p>${data[9].weather.description}</p>    
          <p>Temperatura: ${data[9].weather.temp}ºC</p>    
          <p>Humedad: ${data[9].weather.humidity}%</p>    
          <p>Velocidad del viento: ${data[9].weather.wind_speed} Kmph</p> 
         `;
         nqnWheatherDiv.innerHTML = 
         `<h4>Clima en ${data[8].name}</h4>
         <p>${data[8].weather.description}</p>    
          <p>Temperatura: ${data[8].weather.temp}ºC</p>    
          <p>Humedad: ${data[8].weather.humidity}%</p>    
          <p>Velocidad del viento: ${data[8].weather.wind_speed} </p> 
         `;
         console.log('climaEnNeuquen');
         console.log(climaEnNeuquen);
         console.log('climaEnSanMartin');
         console.log(climaEnSanMartin);
         console.log('climaEnChapelco');
         console.log(climaEnChapelco);
    } catch {
      console.log('error');
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    getData();
});
  

//Administrador del Taskmanager en la tercer seccion del Dashboard
//El TaskManager es un CRD sencillo para anotar tareas y eliminarlas luego de realizarlas.
//Hace usoo de Local Storage.
let taskmngrForm = document.getElementById("taskmngrForm");
let taskmngrOutput = document.getElementById("taskmngrOutput");
let outputid = 55;
taskmngrForm.addEventListener("submit", (e)=>{
e.preventDefault();
let reserveInputs = e.target.children;
let output = reserveInputs[2].value;
outputid = outputid++;
createTask(output, outputid)
})
const createTask = (input, id) => {
  let task =  document.createElement('div');
  task.innerHTML = `<div class="dashboard-taskmngr-output__card"><span class="material-icons pills-icons">task</span>
  <p>${input}</p>
  <span id=trashButton class="material-icons pills-icons">delete</span>`;
  taskmngrOutput.appendChild(task);
  let trashButton = document.getElementById("trashButton");
  trashButton.addEventListener('click',() =>{
  taskmngrOutput.removeChild(task);
  })
}
