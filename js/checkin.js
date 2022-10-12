let idCheckinCounter = 555;
//Cargamos Algunos Check In a modo de Ejemplos Precargados
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

let checkInDiv = document.getElementById('checkin-output')
let checkinForm = document.getElementById("checkinForm");

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
    console.log(checkInArray);
    printItem(newCheckin);
    localStorage.setItem("checkinStorage", JSON.stringify(checkInArray));
  });

const printItem = (entry) =>{
    console.log('Nuevo Checkin')
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

}

window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("checkinStorage")) {
        let localstoragearr = JSON.parse(localStorage.getItem("checkinStorage"));
        console.log('Detalle de Local Storage');
        console.log(localstoragearr);
        checkInArray = localstoragearr;
        checkInArray.forEach((checkin) => {
        printItem(checkin);
    })} else{
    checkInArray.forEach((checkin) => {
        printItem(checkin);
    })}
})