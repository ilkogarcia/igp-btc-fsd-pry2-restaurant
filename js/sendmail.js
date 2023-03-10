// Shows hidden elements in the html @param {string} element Id
const showElement = (elementId) => {
    document.getElementById(elementId).style.visibility = 'visible';
}

// Hide elements visible in the html @param {string} element Id
const hideElement = (elementId) => {
    document.getElementById(elementId).style.visibility = 'hidden';
}

// Pop Up - show message passed in parameters 
const setSuccessMessage = (textMsg) => {
    if (textMsg == 'OK') {
        document.getElementById("messagepopup-title").innerHTML = "GRACIAS";
        document.getElementById("messagepopup-text").innerHTML = "Su mensaje ha sido enviado con éxito";
        showElement('message-popup');
    } else {
        document.getElementById("messagepopup-title").innerHTML = "ALERTA";
        document.getElementById("messagepopup-text").innerHTML = "Ha ocurrido un error durante el envío. Compruebe los datos que ha introducido como por ejempo que su dirección de correo electrónico sea valida.";
        showElement('message-popup');
    }
}

const getUserName = () => {
    let username = document.getElementById("inputName").value;
    return username.trimStart();
}

const getUserEmail = () => {
    let useremail = document.getElementById("inputEmail").value;
    return useremail.trimStart();
}

const getUserMessage = () => {
    let usermessage = document.getElementById("inputMessage").value;
    return usermessage.trimStart();
}

// Function to send emails via SmtpJS.com
const sendEmail = () => {

    let name = getUserName();
    let email = getUserEmail();
    let message = getUserMessage();

    Email.send({
        SecureToken : "cff0dcc0-27c7-4251-ae99-c60dad645fbd",
        To : 'reservas@viejobarrio.es',
        From : email,
        Subject : "Contact from " + name,
        Body : message
    })
    .then(response => setSuccessMessage(response));
}
