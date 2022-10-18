//El administrador de la botonera en la primer seccion del Dashboard
//se maneja como un modulo de la seccion de Checkins

//Administrador del Widget del Clima en la segunda seccion del Dashboard

let smaWeatherDiv = document.getElementById("smaWeather");
let chapWeatherDiv = document.getElementById("chapWeather");
let nqnWeatherDiv = document.getElementById("nqnWeather");

document.addEventListener("DOMContentLoaded", () => {
  getData();
  storageTasks();
  storageTasksHistory();
});

const getData = async () => {
  try {
    const respuesta = await fetch("https://ws.smn.gob.ar/map_items/weather/");
    const data = await respuesta.json();
    console.log(data);
    smaWeatherDiv.innerHTML = `<h4>Clima en ${data[120].name}</h4>
         <p>${data[120].weather.description}</p>    
          <p>Temperatura: ${data[120].weather.temp}ºC</p>    
          <p>Humedad: ${data[120].weather.humidity}%</p>    
          <p>Velocidad del viento: ${data[120].weather.wind_speed} Kmph</p> 
         `;
    chapWeatherDiv.innerHTML = `<h4>Clima en ${data[158].name}</h4>
         <p>${data[158].weather.description}</p>    
          <p>Temperatura: ${data[158].weather.temp}ºC</p>    
          <p>Humedad: ${data[158].weather.humidity}%</p>    
          <p>Velocidad del viento: ${data[158].weather.wind_speed} Kmph</p> 
         `;
    nqnWeatherDiv.innerHTML = `<h4>Clima en ${data[176].name}</h4>
         <p>${data[176].weather.description}</p>    
          <p>Temperatura: ${data[176].weather.temp}ºC</p>    
          <p>Humedad: ${data[176].weather.humidity}%</p>    
          <p>Velocidad del viento: ${data[176].weather.wind_speed} Kmph</p> 
         `;

    //   El fondo de las tarjetas sera dinamico en funcion del clima que se detecte
    //   El codigo se volvio un poco tedioso y repetitivo. probablemente podia haberlo simplificaddo, pero
    //   me basto con hacerlo funcional momentaneamente.
    let smaWeatherInfo = data[120].weather.description;

    if (
      smaWeatherInfo.includes("despejado") ||
      smaWeatherInfo.includes("Despejado") ||
      smaWeatherInfo.includes("Soleado") ||
      smaWeatherInfo.includes("soleado")
    ) {
      smaWeatherDiv.className = "sunnybg";
    }
    if (
      smaWeatherInfo.includes("nublado") ||
      smaWeatherInfo.includes("Nublado") ||
      smaWeatherInfo.includes("niebla") ||
      smaWeatherInfo.includes("Niebla") ||
      smaWeatherInfo.includes("neblina")
    ) {
      smaWeatherDiv.className = "cloudybg";
    }
    if (
      smaWeatherInfo.includes("Lluvia") ||
      smaWeatherInfo.includes("lluvia") ||
      smaWeatherInfo.includes("llovizna") ||
      smaWeatherInfo.includes("Llovizna")
    ) {
      smaWeatherDiv.className = "rainybg";
    }
    if (
      smaWeatherInfo.includes("Vientos") ||
      smaWeatherInfo.includes("viento")
    ) {
      smaWeatherDiv.className = "windybg";
    }
    if (
      smaWeatherInfo.includes("Nieve") ||
      smaWeatherInfo.includes("nieve") ||
      smaWeatherInfo.includes("Nevada") ||
      smaWeatherInfo.includes("nevada") ||
      smaWeatherInfo.includes("Ventisca") ||
      smaWeatherInfo.includes("ventisca")
    ) {
      smaWeatherDiv.className = "snowybg";
    }
    if (
      smaWeatherInfo.includes("Tormenta") ||
      smaWeatherInfo.includes("tormenta") ||
      smaWeatherInfo.includes("Relampago") ||
      smaWeatherInfo.includes("relampago") ||
      smaWeatherInfo.includes("Granizo") ||
      smaWeatherInfo.includes("granizo")
    ) {
      smaWeatherDiv.className = "stormybg";
    }
    let chapWeatherInfo = data[158].weather.description;

    if (
      chapWeatherInfo.includes("despejado") ||
      chapWeatherInfo.includes("Despejado") ||
      chapWeatherInfo.includes("Soleado") ||
      chapWeatherInfo.includes("soleado")
    ) {
      chapWeatherDiv.className = "sunnybg";
    }
    if (
      chapWeatherInfo.includes("nublado") ||
      chapWeatherInfo.includes("Nublado") ||
      chapWeatherInfo.includes("niebla") ||
      chapWeatherInfo.includes("Niebla") ||
      chapWeatherInfo.includes("neblina")
    ) {
      chapWeatherDiv.className = "cloudybg";
    }
    if (
      chapWeatherInfo.includes("Lluvia") ||
      chapWeatherInfo.includes("lluvia") ||
      chapWeatherInfo.includes("llovizna") ||
      chapWeatherInfo.includes("Llovizna")
    ) {
      chapWeatherDiv.className = "rainybg";
    }
    if (
      chapWeatherInfo.includes("Vientos") ||
      chapWeatherInfo.includes("viento")
    ) {
      chapWeatherDiv.className = "windybg";
    }
    if (
      chapWeatherInfo.includes("Nieve") ||
      chapWeatherInfo.includes("nieve") ||
      chapWeatherInfo.includes("Nevada") ||
      chapWeatherInfo.includes("nevada") ||
      chapWeatherInfo.includes("Ventisca") ||
      chapWeatherInfo.includes("ventisca")
    ) {
      chapWeatherDiv.className = "snowybg";
    }
    if (
      chapWeatherInfo.includes("Tormenta") ||
      chapWeatherInfo.includes("tormenta") ||
      chapWeatherInfo.includes("Relampago") ||
      chapWeatherInfo.includes("relampago") ||
      chapWeatherInfo.includes("Granizo") ||
      chapWeatherInfo.includes("granizo")
    ) {
      chapWeatherDiv.className = "stormybg";
    }

    let nqnWeatherInfo = data[176].weather.description;
    if (
      nqnWeatherInfo.includes("despejado") ||
      nqnWeatherInfo.includes("Despejado") ||
      nqnWeatherInfo.includes("Soleado") ||
      nqnWeatherInfo.includes("soleado")
    ) {
      nqnWeatherDiv.className = "sunnybg";
    }
    if (
      nqnWeatherInfo.includes("nublado") ||
      nqnWeatherInfo.includes("Nublado") ||
      nqnWeatherInfo.includes("niebla") ||
      nqnWeatherInfo.includes("Niebla") ||
      nqnWeatherInfo.includes("neblina")
    ) {
      nqnWeatherDiv.className = "cloudybg";
    }
    if (
      nqnWeatherInfo.includes("Lluvia") ||
      nqnWeatherInfo.includes("lluvia") ||
      nqnWeatherInfo.includes("llovizna") ||
      nqnWeatherInfo.includes("Llovizna")
    ) {
      nqnWeatherDiv.className = "rainybg";
    }
    if (
      nqnWeatherInfo.includes("Vientos") ||
      nqnWeatherInfo.includes("viento")
    ) {
      nqnWeatherDiv.className = "windybg";
    }
    if (
      nqnWeatherInfo.includes("Nieve") ||
      nqnWeatherInfo.includes("nieve") ||
      nqnWeatherInfo.includes("Nevada") ||
      nqnWeatherInfo.includes("nevada") ||
      nqnWeatherInfo.includes("Ventisca") ||
      nqnWeatherInfo.includes("ventisca")
    ) {
      nqnWeatherDiv.className = "snowybg";
    }
    if (
      nqnWeatherInfo.includes("Tormenta") ||
      nqnWeatherInfo.includes("tormenta") ||
      nqnWeatherInfo.includes("Relampago") ||
      nqnWeatherInfo.includes("relampago") ||
      nqnWeatherInfo.includes("Granizo") ||
      nqnWeatherInfo.includes("granizo")
    ) {
      nqnWeatherDiv.className = "stormybg";
    }
  } catch {
    console.log("catch log");
  }
};

//Administrador del Taskmanager en la tercer seccion del Dashboard
//El TaskManager es sencillo anotador de tareas, permite eliminarlas luego de realizarlas.
//Consta de un Formulario:
let taskmngrForm = document.getElementById("taskmngrForm"); //Formulario de entrada
let taskHistory = document.getElementById("taskHistory") ;  //Historial
let outputid = 55;      //Arrancamos en el numero 55 para simular operaciones previas
const tasksStorage = []   //las Tareas se almacenaran en este array
const historyStorage = [] //y el historial de tareas aqui
taskmngrForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let taskInput = e.target.children;
  let output = taskInput[2].value;
  if (taskInput[2].value === "") { //Prevenimos el ingreso de valores vacios y enviamos una alerta.
    Toastify({
      text: "Ingrese una tarea",
      style: {
        background: "linear-gradient(to right, #132D46, #191E29)",
      },
    }).showToast();} else { 
  outputid = outputid + 1;
  renderTasks(output, outputid);   //Renderizamos las tareas con la funcion renderTasks
  taskOutput = {"id": outputid , "task": output};
  taskInput[2].value = "";        //Reiniciamos el Input
  tasksStorage.push(taskOutput)
  localStorage.setItem("tasksStorage", JSON.stringify(tasksStorage)); //Almacenamos la tarea en localStorage
}});

//Y un Output
let taskmngrOutput = document.getElementById("taskmngrOutput");
const renderTasks = (input, id) => {
  let task = document.createElement("div");
  task.innerHTML = `
  <div class="dashboard-taskmngr-output__card">
  <span class="material-icons pills-icons">task</span>
  <p>${input}</p>
  <span id="trashButton${id}" class="material-icons pills-icons">delete</span></div>`;
  taskmngrOutput.appendChild(task);
  let trashButton = document.getElementById(`trashButton${id}`);    //Un boton para eliminar las entradas
  trashButton.addEventListener("click", (e) => {
    let taskRegister = {id , input}
    historyStorage.push(taskRegister)
    localStorage.setItem("historyStorage", JSON.stringify(historyStorage));
    console.log(historyStorage);
    archiveTask (input, id);
    item = trashButton.parentElement;
    let taskindexof = tasksStorage.findIndex(t => t.id == id);
    taskmngrOutput.removeChild(task);                             //Borramos el div de la lista
    tasksStorage.splice(taskindexof, 1);                             //y borramos la entrada del array
    localStorage.setItem("tasksStorage", JSON.stringify(tasksStorage)); //actualizamos el local storage ya sin la entrada
    Toastify({
      text: `Tarea Archivada`,
      style: {
        background: "linear-gradient(to right, #132D46, #191E29)",
      },
    }).showToast();
  });
};
//Restauramos las tareas guardadas en el Localstorage
let storageTasks = ()=>{
  if (localStorage.getItem("tasksStorage")) {
    restoreStorage = JSON.parse(localStorage.getItem("tasksStorage"));
    restoreStorage.forEach((restoretask) => {
     tasksStorage.push(restoretask)
     localStorage.setItem("tasksStorage", JSON.stringify(tasksStorage));
      let tasktext = restoretask.task;
      let taskid = restoretask.id;
     renderTasks(tasktext , taskid);         }
)}}

let storageTasksHistory = ()=>{
  if (localStorage.getItem("historyStorage")) {
    restoreHistoryStorage = JSON.parse(localStorage.getItem("historyStorage"));
    restoreHistoryStorage.forEach((restoretask) => {
      historyStorage.push(restoretask)
      let tasktext = restoretask.input;
      let taskid = restoretask.id;
      outputid = taskid + 1;
      archiveTask(tasktext , taskid);
    }
)}//esta funcion almacena el historial de las tareas en el localStorage
}  

const archiveTask = (input, id) => {
  let task = document.createElement("div");
  task.innerHTML = `
  <div class="dashboard-taskmngr-output__card">
  <span class="material-icons pills-icons">task</span>
  <p>${input}</p><p>${id}</p></div>`;
  taskHistory.appendChild(task);
}