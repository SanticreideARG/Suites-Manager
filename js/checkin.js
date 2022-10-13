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
    {"Habitacion": "208"},
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
    div.innerHTML = `                
    <div class="checkin-output__card">
    <h3>${entry[1].Nombre}</h3>
    <p>${entry[4].Habitacion}</p>
    <p>${entry[3].Nacionalidad}</p>
    <p>Id: ${entry[0].Id}</p>
    <p>Ingreso: 23/10/22</p>
    <p>Salida: 25/10/22</p>
    </div>`;
    checkInDiv.appendChild(div); 
    printCheckout(entry);
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