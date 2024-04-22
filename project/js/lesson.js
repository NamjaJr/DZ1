//PHONE BLOCK

// const phoneInput = document.querySelector('#phone_input')
// const phoneButton = document.querySelector('#phone_button')
// const phoneSpan = document.querySelector('#phone_span')
//
// const regExp = /^\+996[2579]\d{2} \d{2}-\d{2}-\d{2}$/
//
// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneSpan.innerHTML = 'ОК'
//         phoneSpan.style.color = 'green'
//     }else  {
//         phoneSpan.innerHTML = 'NOT OK'
//         phoneSpan.style.color = 'red'
//     }
// }

const tabContentBlock = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
const hideTabContent = () => {
    tabContentBlock.forEach((item) =>{
        item.style.display = 'none'
    })
    tabContentItems.forEach((item) =>{
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlock[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent(0)

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item,index) =>{
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }

        })
    }
}

const auto = (index = 0) => {
    setInterval(() => {
        index++
        if (index > tabContentItems.length - 1) {
            index = 0
        }
        hideTabContent()
        showTabContent(index)
    }, 3000)
}
auto()

//Converter
const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')

somInput.addEventListener('input', () => {
    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        usdInput.value = (somInput.value / data.usd).toFixed(2)
    })
})

const converter = (element, target, current) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            switch (current) {
                case 'som':
                    target.value = (element.value/data.usd).toFixed(2)
                    break
                case 'usd':
                    target.value = (element.value * data.usd).toFixed(2)
                    break
                default:
                    break
            }
            element.value === '' ? target.value = '' : ''
        }
    }
}

converter(somInput, usdInput, 'som')
converter(usdInput, somInput, 'usd')



document.addEventListener("DOMContentLoaded", function() {
    const converter = (element, target1, target2, data) => {
        element.oninput = () => {
            const inputValue = parseFloat(element.value);
            if (!isNaN(inputValue)) {
                switch (element.id) {
                    case 'som':
                        target1.value = (inputValue / data.usd).toFixed(2)
                        target2.value = (inputValue / data.eur).toFixed(2)
                        break
                    case 'usd':
                        target1.value = (inputValue * data.usd).toFixed(2)
                        target2.value = (inputValue * data.usd / data.eur).toFixed(2)
                        break
                    case 'eur':
                        target1.value = (inputValue * data.eur).toFixed(2)
                        target2.value = (inputValue * data.eur / data.usd).toFixed(2)
                        break
                    default:
                        break
                }
            } else {
                target1.value = ''
                target2.value = ''
            }
        }
    }

    const somInput = document.getElementById('som')
    const usdInput = document.getElementById('usd')
    const eurInput = document.getElementById('eur')

    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send();

    request.onload = () => {
        const data = JSON.parse(request.response)
        converter(somInput, usdInput, eurInput, data)
        converter(usdInput, somInput, eurInput, data)
        converter(eurInput, somInput, usdInput, data)
    }
})

//CARD SWITCHER

// const card = document.querySelector('.card')
// const btnNext = document.querySelector('#btn-next')
// const btnPrev = document.querySelector('#btn-prev')
//
// let count = 0
//
// btnNext.onclick = () => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(response => respone.json())
//         .then(data => {
//             card.innerHTML = `
//                 <p>${data.title}</p>
//                 <p style="color: ${data.complited ? 'green' : 'red'}">${data.comlited}</p>
//                 <span>${data.id}</span>
//             `
//         })
// }

//CARD SWITCHER

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let count = 1

const getrequest = async () =>{
    try{
        const url = await `https://jsonplaceholder.typicode.com/todos/${count}`
        const response= await fetch(url)
        const data= await response.json()
        const getData= await (() =>{
            card.innerHTML=`
                <p>${data.title}</p>
                <p style ='color:  ${data.completed ? 'green':'red'} '> ${data.completed}</p>
                <span>${data.id }</span>
            `
        })
        getData()
    }catch (error){
        console.log()
    }
}
const slideCard= (button, current) =>{
    getrequest()
    button.onclick =() =>{
        switch(current){
            case 'next':
                if(count===200){
                    count=0
                }
                count++
                break
            case 'prev':
                if(count===1){
                    count=201
                }
                count=count-1
        }
        getrequest()

    }
}
slideCard(btnNext, 'next')
slideCard(btnPrev, 'prev')



// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.error('Ошибка при загрузке данных:', error)
//     })
