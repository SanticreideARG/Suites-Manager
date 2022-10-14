//  Tenemos un Formulario de creacion de Entradas y un Visualizador de estas

let checkInDiv = document.getElementById('checkin-output')
let checkinForm = document.getElementById("checkinForm");

//  cada uno tendra un identificador, los ejemplos van por el numero 555 asique cargamos ese mumero
let idCheckinCounter = 555;

//  Cargamos Algunos Check In a modo de Ejemplos Precargados
let checkInArray = [
[   {"Id": "553"},
    {"Nombre": "Juan"},
    {"Apellido": "Perez"},
    {"Nacionalidad": "arg"},
    {"Habitacion": "205"},
    {"Dias": "2"}   ] ,

[   {"Id": "554"},
    {"Nombre": "Pepito"},
    {"Apellido": "Sanchez"},
    {"Nacionalidad": "Bra"},
    {"Habitacion": "208"},
    {"Dias": "1"}       ],

[   {"Id": "555"},
    {"Nombre": "Marta"},
    {"Apellido": "Rodriguez"},
    {"Nacionalidad": "Esp"},
    {"Habitacion": "209"},
    {"Dias": "1"}       ]
];

//  Cargaremos los datos del formulario a un array llamado newCheckin y los 
//  agregamos a nuestro array con las reservas (checkInArray).
checkinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let checkinInputs = e.target.children;
    idCheckinCounter = idCheckinCounter +1;
    let newCheckin = 
    [{"Id": `${idCheckinCounter}`},
    {"Nombre": `${checkinInputs[5].value}`},
    {"Apellido": `${checkinInputs[7].value}`},
    {"Nacionalidad": `${checkinInputs[3].value}`},
    {"Habitacion": `${checkinInputs[1].value}`},
    {"Dias": `${checkinInputs[9].value}`}];
    checkInArray.push(newCheckin);
    printItem(newCheckin);
    localStorage.setItem("checkinStorage", JSON.stringify(checkInArray));
    checkinInputs[5].value = "";
    checkinInputs[7].value = "";
  });

// Los cargamos en el dom
const printItem = (entry) =>{
    let div = document.createElement('div');
    div.className = "checkin-card";
    div.id = `outputcard${entry[4].Habitacion}`
    div.innerHTML = `                
    <div class="checkin-output__card" >
    <h3>${entry[1].Nombre} ${entry[2].Apellido}</h3>
    <p>${entry[4].Habitacion}</p>
    <p>${entry[3].Nacionalidad}</p>
    <p>Id: ${entry[0].Id}</p>
    <p>Ingreso: 23/10/22</p>
    <p>Salida: 25/10/22</p>
    </div>`;
    checkInDiv.appendChild(div); 
    printCheckout(entry);
    freeToOcupied(entry);
    Toastify({
        text: `Aceptado huesped en habitacion ${entry[4].Habitacion}`,
        style: {
          background: "linear-gradient(to right, #132D46, #191E29)",
        },
      }).showToast();
}

//el checkout se realiza desde la siguiente ventana
let checkoutRoom = document.getElementById("checkoutRoom");
const printCheckout = (entry) =>{

}

//Y guardamos los cambios de checkInArray en 
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("checkinStorage")) {
        let localstoragearr = JSON.parse(localStorage.getItem("checkinStorage"));
        checkInArray = localstoragearr;
        checkInArray.forEach((checkin) => {
        printItem(checkin);
    })} else{
    checkInArray.forEach((checkin) => {
        printItem(checkin);
    })}
})

//Aqui va la logica que maneja que habitaciones estan ocupadas y que habitaciones estan libres.
let ocupiedRooms = [];
let ocupiedRoomsOutput = document.getElementById("ocupiedRooms");

let freeRooms = [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215];
let freeRoomsOutput = document.getElementById("freeRooms");
let roomOptions = document.getElementById("roomOptions");
const createOptions = (freeRooms) =>{
    roomOptions.innerHTML = `` //Esto resetea las opciones para evitar que se creen por duplicado
    freeRooms.forEach((room) =>{  //Este for each creara una opcion por cada habitacion disponible,
    let option = document.createElement('option');  //lo que evitara que se elija una habitacion ya
    option.value = room;                        //ocupada para asignarla a un huesped.
    option.innerText = room;
    roomOptions.appendChild(option); 
    })
}

//Aqui manejaremos las habitaciones que pasan de estar libres a ocupadas.
const freeToOcupied = (entry) =>{
let roomid = entry[4].Habitacion;
let roomIndexOf = freeRooms.findIndex((element) => element == roomid)
ocupiedRooms.push(roomid);
freeRooms.splice(roomIndexOf, 1);                             //Y borramos la entrada del array
ocupiedRoomsOutput.innerHTML = ocupiedRooms.length;
freeRoomsOutput.innerHTML = freeRooms.length;
createOptions(freeRooms);
createCheckoutOptions(ocupiedRooms);                   //Por ultimo actualizamos nuestra lista de opciones.
}

//         CHECKOUT -----------------------------------------------------------------------------
//A partir de aqui comienza la logica y funciones que manejan el Checkout de las entradas y su envio al
//historial, junto a su almacenamiento en LocalStorage.

let checkoutOptions = document.getElementById("checkoutRoom");
let checkoutInfo = document.getElementById("checkoutInfo");


const createCheckoutOptions = (ocupiedRooms) =>{
    checkoutOptions.innerHTML = `
    <option value="" selected disabled hidden>Eliga la Habitacion</option>
    ` //Esto resetea las opciones para evitar que se creen por duplicado
    ocupiedRooms.forEach((room) =>{  //Este for each creara una opcion por cada habitacion ocupada,
    let option = document.createElement('option');  //lo que evitara que se elija una habitacion ya
    option.value = room;                        //ocupada para asignarla a un huesped.
    option.innerText = room;
    checkoutOptions.appendChild(option); 
    })
}

checkoutOptions.addEventListener('change', function(){     
let room = checkoutOptions.value;
let index = checkInArray.findIndex((element) => element[4].Habitacion == checkoutOptions.value) //Buscamos el index en checkInArray
let info = checkInArray[index];

checkoutInfo.innerHTML = `
    <h3>Habitacion N ${room}</h3>
    <h4>${info[1].Nombre} ${info[2].Apellido}</h4>
    <button class="checkout-button" id="checkoutButton${room}">Checkout</button>`
    let checkoutButton = document.getElementById(`checkoutButton${room}`);
    checkoutButton.addEventListener( 'click', () =>{
    checkoutFunction(room);
})
});

const checkoutFunction = (room) =>{
    freeRooms.push(room); //Devolvemos la habitacion al array de los cuartos libres
    let index = ocupiedRooms.findIndex((element) => element == room); //buscamos el index en las habitaciones ocupadas
    ocupiedRooms.splice(index, 1); //y quitamos dicha habitacion de la lista.
    console.log(ocupiedRooms);
    Toastify({
        text: `Checkout de habitacion ${room} Realizado con exito`,
        style: {
          background: "linear-gradient(to right, #132D46, #191E29)",
        },
      }).showToast();
    createOptions(freeRooms);       //Actualizamos ambas listas
    createCheckoutOptions(ocupiedRooms);
    let deleteThis = document.getElementById(`outputcard${room}`); //Seleccionamos el elemento a borrar de Checkins
    checkInDiv.removeChild(deleteThis);                            //Y lo borramos
}



let checkoutsHistory = document.getElementById('checkoutsHistory');

