//PHONE BLOCK

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'ОК'
        phoneSpan.style.color = 'green'
    }else  {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
}


//TAB SLIDER

const tabContentBlock = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
let autoInterval

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
        const index = Array.from(tabContentItems).indexOf(event.target)
        clearInterval(autoInterval)
        hideTabContent()
        showTabContent(index)
        autoInterval = setInterval(auto, 3000)
    }
}

const auto = () => {
    let currentIndex = Array.from(tabContentItems).findIndex(item => item.classList.contains('tab_content_item_active'));
    currentIndex++;
    if (currentIndex > tabContentItems.length - 1) {
        currentIndex = 0;
    }
    hideTabContent()
    showTabContent(currentIndex)
}

autoInterval = setInterval(auto, 3000)


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

const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let count = 1;

const getRequest = async () => {
    try {
        const url = `https://jsonplaceholder.typicode.com/todos/${count}`
        const response = await fetch(url);
        const data = await response.json();
        card.innerHTML = `
            <p>${data.title}</p>
            <p style ='color: ${data.completed ? 'green' : 'red'}'>${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (error) {
        console.log(error);
    }
};

const slideCard = (button, direction) => {
    button.onclick = () => {
        switch (direction) {
            case 'next':
                count = (count % 200) + 1
                break
            case 'prev':
                count = (count === 1) ? 200 : count - 1
                break
        }
        getRequest()
    }
}

slideCard(btnNext, 'next')
slideCard(btnPrev, 'prev')


async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных')
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
    }
}

fetchData();




//WEATHER


const searchInput = document.querySelector('.cityName');
const btnSearch = document.querySelector('#btn-search');
const cityElement = document.querySelector('.city');
const tempElement = document.querySelector('.temp');

const API_KEY = 'e417df62e04d3b1b111abeab19cea714';
const BASE_API = 'http://api.openweathermap.org/data/2.5/weather';

const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`${BASE_API}?q=${city}&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Город не найден...');
        }
        const data = await response.json();
        cityElement.innerHTML = data.name || 'Город не найден...';
        tempElement.innerHTML = data.main?.temp ? `${Math.round(data.main?.temp - 273)}&deg;C` : '...';
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        cityElement.innerHTML = 'Город не найден...';
        tempElement.innerHTML = '...';
    }
};

const citySearch = () => {
    searchInput.oninput = (event) => {
        fetchWeatherData(event.target.value);
    };
};

citySearch();



