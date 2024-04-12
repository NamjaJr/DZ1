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

// const parentBlock = document.querySelector('.parent_block')
// const childBlock = document.querySelector('.child_block')
//
//
// const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
// const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight
//
// let positionX = 0
// let positionY = 0
//
// let moveRight = maxParentWidth
// let moveTop = maxParentHeight
//
//
// const moveBlock = () => {
//     if (positionX < maxParentWidth) {
//         positionX += 2
//         childBlock.style.left = `${positionX}px`
//         requestAnimationFrame(moveBlock)
//     } else if (positionX >= maxParentWidth && positionY < maxParentHeight) {
//         positionY += 2
//         childBlock.style.top = `${positionY}px`
//         requestAnimationFrame(moveBlock)
//     } else if (positionY >= maxParentHeight && moveRight > 0) {
//         moveRight -= 2
//         childBlock.style.left = `${moveRight}px`
//         requestAnimationFrame(moveBlock)
//     } else if (moveRight <= 0 && moveTop > 0) {
//         moveTop -= 2
//         childBlock.style.top = `${moveTop}px`
//         requestAnimationFrame(moveBlock)
//     }else if (moveTop<=0) {
//         positionX = 0
//         positionY = 0
//         moveRight = maxParentWidth
//         moveTop = maxParentHeight
//         moveBlock()
//     }
// }
//
//
// moveBlock()



// const startBtn = document.getElementById('start');
// const stopBtn = document.getElementById('stop');
// const resetBtn = document.getElementById('reset');
// const secondsDisplay = document.getElementById('seconds');
//
// let intervalId;
// let seconds = 0;
//
// function startTimer() {
//     intervalId = setInterval(() => {
//         seconds++;
//         secondsDisplay.textContent = seconds;
//     }, 1000);
//     startBtn.disabled = true;
// }
//
// function stopTimer() {
//     clearInterval(intervalId);
//     startBtn.disabled = false;
// }
//
// function resetTimer() {
//     clearInterval(intervalId);
//     seconds = 0;
//     secondsDisplay.textContent = seconds;
//     startBtn.disabled = false;
// }
//
// startBtn.addEventListener('click', startTimer);
// stopBtn.addEventListener('click', stopTimer);
// resetBtn.addEventListener('click', resetTimer);
//


