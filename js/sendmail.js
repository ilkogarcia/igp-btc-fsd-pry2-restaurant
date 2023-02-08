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
    if (textMsg == "OK") {
        document.getElementById("messagepopup-title").innerHTML = "GRACIAS !!!";
        document.getElementById("messagepopup-text").innerHTML = "Su mensaje ha sido enviado con éxito.";
        showElement('message-popup');
    } else {
        document.getElementById("messagepopup-title").innerHTML = "ALERTA !!!";
        document.getElementById("messagepopup-text").innerHTML = textMsg;
        showElement('message-popup');
    }
}

// Function to send emails via SmtpJS.com
const sendEmail = () => {

    let username = document.getElementById("inputName").value;
    let useremail = document.getElementById("inputEmail").value;
    let usermessage = document.getElementById("inputMessage").value;

    Email.send({
        SecureToken : "cff0dcc0-27c7-4251-ae99-c60dad645fbd",
        To : 'maximo@4vientos.com',
        From : useremail,
        Subject : "Contact from " + username,
        Body : usermessage
    }).then(
    message => setSuccessMessage(message)
    );  
}
