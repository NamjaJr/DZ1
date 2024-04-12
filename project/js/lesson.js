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

