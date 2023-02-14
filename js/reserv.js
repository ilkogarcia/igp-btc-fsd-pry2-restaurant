// Shows hidden elements in the html @param {string} element Id
const showElement = (elementId) => {
    document.getElementById(elementId).style.visibility = 'visible';
}

// Hide elements visible in the html @param {string} element Id
const hideElement = (elementId) => {
    document.getElementById(elementId).style.visibility = 'hidden';
}

// Pop Up - show message passed in parameters 
const showMessage = (textMsg) => {
        document.getElementById("messagepopup-title").innerHTML = "HOLA!";
        document.getElementById("messagepopup-text").innerHTML = textMsg;
        showElement('message-popup');
}

// Pop Up - show message passed in parameters 
const setSuccessMessage = (textMsg) => {
    if (textMsg == 'OK') {
        document.getElementById("messagepopup-title").innerHTML = "GRACIAS";
        document.getElementById("messagepopup-text").innerHTML = "Su reserva ha sido enviada con éxito";
        showElement('message-popup');
    } else {
        document.getElementById("messagepopup-title").innerHTML = "ALERTA";
        document.getElementById("messagepopup-text").innerHTML = "Ha ocurrido un error durante el envío. Compruebe los datos que ha introducido como por ejemplo que su dirección de correo electrónico sea valida.";
        showElement('message-popup');
    }
}

const isValidName = () => {
    let name = document.getElementById("inputName").value;
    return (name != "" || name != null) ? true : false;
}

const isValidPhone = () => {
    let phone = document.getElementById("inputPhone").value;
    return (phone != "" || phone != null ) ? true : false;
}

const isValidPax = () => {
    let pax = document.getElementById("inputPax").value;
    return (pax >= 2 && pax <= 12) ? true : false;
}

const isValidDate = () => {
    // let userdate = document.getElementById("inputDate").value;
    // const date = new Date();
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // let currentDate = `${year}-${month}-${day}`;
    // (userdate.parse() > currentDate.parse()) ? true : false;
    // console.log(userdate);
    // console.log(date);
    // console.log(currentDate);
return true;
}

// Function to send emails via SmtpJS.com
const sendEmail = () => {
    let name = document.getElementById("inputName").value;
    let phone = document.getElementById("inputPhone").value;
    let pax = document.getElementById("inputPax").value;
    let date = document.getElementById("inputDate").value;
    let turn = document.getElementById("inputTurn").value;

    Email.send({
        SecureToken : "cff0dcc0-27c7-4251-ae99-c60dad645fbd",
        To : 'reservas@viejobarrio.es',
        From : "maximo@4vientos.com",
        Subject : "Reserva de: " + name,
        Body : "Nombre:" + name + "Teléfono:" + phone + "Comensales:" + pax + "Dia:" + date + "Turno:" + turn
    })
    .then(response => setSuccessMessage(response));
}

// Method to validate the booking form
const valBookingData = () => {
    if (isValidName() != true) {
        showMessage("Es necesario que indiques un nombre")
    } else if (isValidPhone() != true) {
        showMessage("Es necesario que indiques un número de teléfono correcto")
    } else if (isValidPax() != true) {
        showMessage("Solo es posibe realizar reservas para 1 a 12 comensales")
    } else {
        sendEmail();
    }
}