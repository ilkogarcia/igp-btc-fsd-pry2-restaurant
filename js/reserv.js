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

const isValidName = () => {
    let name = document.getElementById("inputName").value;
    return (name == "" || name == null) ? false : true;
}

const isValidPhone = () => {
    // Validate a phone number of 9 digits with no comma, no spaces, no punctuation and no + sign in front the number.
    let pattern1 = /^\d{9}$/;
    // Valid a phone number like XXX-XXX-XXXX, XXX.XXX.XXXX or XXX XXX XXXX
    // let pattern2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // Valid a phone number like +XX-XXXX-XXXX, +XX.XXXX.XXXX, or +XX XXXX XXXX
    // let pattern3 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    let phone = document.getElementById("inputPhone").value;
    if (phone.match("/^\d{9}$/")) {
        return true;
    } else return true;
}

const isValidPax = () => {
    let pax = document.getElementById("inputPax").value;

}

const isValidDate = () => {
    let date = document.getElementById("inputDate").value;

}

const isValidTurn = () => {
    let turn = document.getElementById("inputTurn").value;

}

// Method to validate the booking form
const valBookingData = () => {

    if (isValidName()) {
        showMessage("El nombre es correcto")
    } else {
        showMessage("Es necesario que indiques un nombre")
    }

    if (isValidPhone()) {
        showMessage("El teléfono es correcto")
    } else {
        showMessage("Es necesario que indiques un número de teléfono correcto")
    }
}