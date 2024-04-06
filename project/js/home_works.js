// const gmailInput = document.querySelector('#gmail_input')
// const gmailButton = document.querySelector('#gmail_button')
// const gmailSpan = document.querySelector('#gmail_result')
//
// const regExp = /^[a-z\d._%+-]+@gmail\.com$/i
// gmailButton.onclick = () => {
//     if (regExp.test(gmailInput.value)) {
//         gmailSpan.innerHTML = 'Успешно!'
//         gmailSpan.style.color = 'green'
//     } else {
//         gmailSpan.innerHTML = 'Ошибка'
//         gmailSpan.style.color = 'red'
//     }
// }

const childBlock = document.querySelector('.child_block')
let counter= 0
setInterval(() => {
    if (counter <= 450) {
        counter+= 5
        childBlock.style.left = `${counter}px`
    }
},100)