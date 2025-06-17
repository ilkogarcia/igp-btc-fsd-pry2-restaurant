/* ---------- POP-UP helpers ---------- */
const showElement = (id) => {
  const el = document.getElementById(id)
  if (el) el.style.visibility = 'visible'
}
const hideElement = (id) => {
  const el = document.getElementById(id)
  if (el) el.style.visibility = 'hidden'
}

/* ---------- Mensaje de éxito / error ---------- */
const setSuccessMessage = (textMsg) => {
  const title = document.getElementById('messagepopup-title')
  const body = document.getElementById('messagepopup-text')
  if (!title || !body) return // Por si faltan nodos

  if (textMsg === 'OK') {
    title.textContent = 'GRACIAS'
    body.textContent = 'Su mensaje ha sido enviado con éxito'
  } else {
    title.textContent = 'ALERTA'
    body.textContent =
      'Ha ocurrido un error durante el envío. Compruebe los datos que ha introducido (por ejemplo, que su dirección de correo electrónico sea válida).'
  }
  showElement('message-popup')
}

/* ---------- EmailJS ---------- */
;(function () {
  /* 1 · Inicializa con tu Public Key */
  emailjs.init('8OmUGgV5ftHGZfLqb')

  /* 2 · Elementos del formulario */
  const form = document.getElementById('contact-form')
  if (!form) return // el HTML aún no está
  const submitBtn = form.querySelector('button[type="submit"]')

  /* 3 · Tus IDs de EmailJS */
  const SERVICE_ID = 'service_j2llk7s'
  const TEMPLATE_ID = 'template_xw9rh3q'

  /* 4 · Intercepta el envío */
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    /* Feedback visual */
    const originalText = submitBtn.textContent
    submitBtn.disabled = true
    submitBtn.textContent = 'Enviando…'

    /* Llama a EmailJS */
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, this)
      .then(() => {
        setSuccessMessage('OK') // Pop-up éxito
        form.reset() // Limpia campos
      })
      .catch((err) => {
        setSuccessMessage(err?.text || 'ERROR') // Pop-up error
      })
      .finally(() => {
        submitBtn.disabled = false // Restaura botón
        submitBtn.textContent = originalText
      })
  })
})()
