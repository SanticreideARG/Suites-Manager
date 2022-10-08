//Administrador de la botonera en la primer seccion del Dashboard

//Administrador del Widget del Clima en la segunda seccion del Dashboard

let smaWeatherDiv = document.getElementById("smaWeather");
let chapWeatherDiv = document.getElementById("chapWeather");
let nqnWeatherDiv = document.getElementById("nqnWeather");

document.addEventListener("DOMContentLoaded", () => {
  getData();
});

const getData = async () => {
  try {
    const respuesta = await fetch("https://ws.smn.gob.ar/map_items/weather/");
    const data = await respuesta.json();
    console.log(data);
    smaWeatherDiv.innerHTML = `<h4>Clima en ${data[10].name}</h4>
         <p>${data[10].weather.description}</p>    
          <p>Temperatura: ${data[10].weather.temp}ºC</p>    
          <p>Humedad: ${data[10].weather.humidity}%</p>    
          <p>Velocidad del viento: ${data[10].weather.wind_speed}</p> 
         `;
    chapWeatherDiv.innerHTML = `<h4>Clima en ${data[9].name}</h4>
         <p>${data[9].weather.description}</p>    
          <p>Temperatura: ${data[9].weather.temp}ºC</p>    
          <p>Humedad: ${data[9].weather.humidity}%</p>    
          <p>Velocidad del viento: ${data[9].weather.wind_speed} Kmph</p> 
         `;
    nqnWeatherDiv.innerHTML = `<h4>Clima en ${data[8].name}</h4>
         <p>${data[8].weather.description}</p>    
          <p>Temperatura: ${data[8].weather.temp}ºC</p>    
          <p>Humedad: ${data[8].weather.humidity}%</p>    
          <p>Velocidad del viento: ${data[8].weather.wind_speed} </p> 
         `;

    //   El fondo de las tarjetas sera dinamico en funcion del clima que se detecte

    let smaWeatherInfo = data[10].weather.description;

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
    } else {
      console.log("clima no detectado");
    }
    let chapWeatherInfo = data[9].weather.description;

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
    } else {
      console.log("clima no detectado");
    }
    let nqnWeatherInfo = data[8].weather.description;
    console.log(nqnWeatherInfo);
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
    } else {
      console.log("clima no detectado");
    }
  } catch {
    console.log("catch log");
  }
};

//Administrador del Taskmanager en la tercer seccion del Dashboard
//El TaskManager es un CRUD sencillo para anotar tareas y eliminarlas luego de realizarlas.
//Hace usoo de Local Storage y las tarjetas eliminadas son enviadas al historial.
let taskmngrForm = document.getElementById("taskmngrForm");
let taskmngrOutput = document.getElementById("taskmngrOutput");
let outputid = 55;
taskmngrForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let reserveInputs = e.target.children;
  let output = reserveInputs[2].value;
  outputid = outputid + 1;
  renderTasks(output, outputid);
  reserveInputs[2].value = '';
});


const renderTasks = (input, id) => {
  console.log(id)
  let task = document.createElement("div");
  task.innerHTML = `<div class="dashboard-taskmngr-output__card"><span class="material-icons pills-icons">task</span>
  <p>${input}</p>
  <span id=trashButton class="material-icons pills-icons">delete</span>`;
  taskmngrOutput.appendChild(task);
  let trashButton = document.getElementById("trashButton");
  trashButton.addEventListener("click", () => {
    taskmngrOutput.removeChild(task);
  });
};
