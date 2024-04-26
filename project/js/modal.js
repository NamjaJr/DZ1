//modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    window.removeEventListener('scroll', scrollEnd)
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => {
    openModal()
}
modalCloseButton.onclick = () => {
    closeModal()
}
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

const scrollEnd =() =>{
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal();
    }
}

// const autoModal = setInterval(() =>{
//     openModal()
// },10000)
//
// window.addEventListener('scroll', scrollEnd)
//
//


//tg bot
const form = document.querySelector('form')

const TOKEN = '6742263430:AAGv7qkFZlXqPr7B8D2OenRYu3riqcCsvCY'
const CHAT_ID = '@espada_e3rwef'
const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

form.onsubmit = async (event) =>{
    event.preventDefault()
    const result = event.target
    const { name, phone} = Object.fromEntries(new FormData(result).entries())
    const text = `От: ${name}\n Номер: ${phone}`

    await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text
        })
    })
}