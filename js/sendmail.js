// Environment configuration
let EMAIL_CONFIG = { HOST: '', USERNAME: '', PASSWORD: '' }
if (typeof process !== 'undefined' && process.env) {
  EMAIL_CONFIG.HOST = process.env.HOST || ''
  EMAIL_CONFIG.USERNAME = process.env.USERNAME || ''
  EMAIL_CONFIG.PASSWORD = process.env.PASSWORD || ''
} else if (typeof window !== 'undefined' && window.ENV) {
  EMAIL_CONFIG = window.ENV
}

// Shows hidden elements in the html @param {string} element Id
const showElement = (elementId) => {
  document.getElementById(elementId).style.visibility = 'visible'
}

// Hide elements visible in the html @param {string} element Id
const hideElement = (elementId) => {
  document.getElementById(elementId).style.visibility = 'hidden'
}

// Pop Up - show message passed in parameters
const setSuccessMessage = (textMsg) => {
  if (textMsg == 'OK') {
    document.getElementById('messagepopup-title').innerHTML = 'GRACIAS'
    document.getElementById('messagepopup-text').innerHTML =
      'Su mensaje ha sido enviado con éxito'
    showElement('message-popup')
  } else {
    document.getElementById('messagepopup-title').innerHTML = 'ALERTA'
    document.getElementById('messagepopup-text').innerHTML =
      'Ha ocurrido un error durante el envío. Compruebe los datos que ha introducido como por ejemplo que su dirección de correo electrónico sea valida.'
    showElement('message-popup')
  }
}

const getUserName = () => {
  let username = document.getElementById('inputName').value
  return username.trimStart()
}

const getUserEmail = () => {
  let useremail = document.getElementById('inputEmail').value
  return useremail.trimStart()
}

const getUserMessage = () => {
  let usermessage = document.getElementById('inputMessage').value
  return usermessage.trimStart()
}

// Function to send emails via SmtpJS.com
const sendEmail = () => {
  let name = getUserName()
  let email = getUserEmail()
  let message = getUserMessage()

  Email.send({
    Host: EMAIL_CONFIG.HOST,
    Username: EMAIL_CONFIG.USERNAME,
    Password: EMAIL_CONFIG.PASSWORD,
    To: 'reservas@viejobarrio.es',
    From: EMAIL_CONFIG.USERNAME,
    Subject: 'Contact from ' + name + email,
    Body: message,
  }).then((response) => setSuccessMessage(response))
}
