let idCheckinCounter = 555;
console.log(idCheckinCounter)

let checkinForm = document.getElementById("checkinForm");
checkinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let checkinInputs = e.target.children;
    console.log(idCheckinCounter)
    idCheckinCounter = idCheckinCounter +1;
    let newCheckin = 
    [{"Id": `${idCheckinCounter}`},
    {"Nombre": `${checkinInputs[5].value}`},
    {"Apellido": `${checkinInputs[7].value}`},
    {"Nacionalidad": `${checkinInputs[3].value}`},
    {"Habitacion": `${checkinInputs[1].value}`},
    {"Dias": `${checkinInputs[9].value}`}];
    console.log(newCheckin);
    printCheckin(newCheckin);
  });

  const printCheckin = (newCheckin) =>{
    
  }
