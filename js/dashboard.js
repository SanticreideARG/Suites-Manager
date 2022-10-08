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
      const climaEnSanMartin = 
      [ {"lugar": data[10].name},
      {"descripcion": data[10].weather.description},
      {"temperatura": data[10].weather.temp},
      {"humedad": data[10].weather.humidity},
      {"velocidad del viento": data[10].weather.wind_speed},
      {"direccion del viento": data[10].weather.wing_deg},];
        const climaEnNeuquen = 
        [ {"lugar": data[8].name},
        {"descripcion": data[8].weather.description},
        {"temperatura": data[8].weather.temp},
        {"humedad": data[8].weather.humidity},
        {"velocidad del viento": data[8].weather.wind_speed},
        {"direccion del viento": data[8].weather.wing_deg},]; 
          const climaEnChapelco = 
          [{"lugar": data[9].name},
          {"descripcion": data[9].weather.description},
          {"temperatura": data[9].weather.temp},
          {"humedad": data[9].weather.humidity},
          {"velocidad del viento": data[9].weather.wind_speed},
          {"direccion del viento": data[9].weather.wing_deg},];
  
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
