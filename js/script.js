//Receiving Time
const hourElement = document.querySelector('.hours'),
      minuteElement = document.querySelector('.minutes'),
      secondElement = document.querySelector('.seconds'),
      milisecondElement = document.querySelector('.miliseconds');

//Receiving Buttons
const startButton = document.querySelector('.start'),
      pauseButton = document.querySelector('.pause'),
      stopButton = document.querySelector('.stop'),
      newButton = document.querySelector('.new');

//Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    StopTimer()
    DisableNewButton()
})

newButton.addEventListener('click', () => {
    clearInterval(interval)
    counter++
    const results = document.querySelector('.results')
    const div = document.createElement('div')
    div.classList.add('results__info')
    div.innerText = `${counter} loop is ${hours}h ${minutes}m ${seconds}s ${miliseconds}ms`
    results.append(div)
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

//Variables
let hours = 00, minutes = 00, seconds = 00, miliseconds = 00, interval, counter = 0, disabled = true

//Start Timer Func
function startTimer(){
    miliseconds++

//Miliseconds
    if(miliseconds < 9){
        milisecondElement.innerText = "0" + miliseconds
    }
    if(miliseconds > 9){
        milisecondElement.innerText = miliseconds
    }
    if (miliseconds > 99){
        seconds++
        secondElement.innerText = "0" + seconds
        miliseconds = 0
        milisecondElement.innerHTML = "0" + miliseconds
    }

//Seconds
    if(seconds < 9){
        secondElement.innerText = "0" + seconds
    }
    if(seconds > 9){
        secondElement.innerText = seconds
    }
    if(seconds > 59){
        minutes++
        minuteElement.innerText = "0" + minutes
        seconds = 0
        secondElement.innerText = "0" + seconds
    }

//Minutes
    if(minutes < 9){
        minuteElement.innerText = "0" + minutes
    }
    if(minutes > 9){
        milisecondElement.innerText = minutes
    }
    if (minutes > 59){
        hours++
        hourElement.innerText = "0" + hours
        minutes = 0
        minuteElement.innerHTML = "0" + minutes
    }

//Hours
    if(hours < 9){
        hourElement.innerText = +'0' + hours
    }
    if(hours > 9){
        hourElement.innerText = hours
    }
    newButton.disabled = false
}

//Stop Timer Func
function StopTimer() {
    hours = 00
    minutes = 00
    seconds = 00
    miliseconds = 00
    hourElement.innerText = "00"
    minuteElement.innerText = "00"
    secondElement.innerText = "00"
    milisecondElement.innerText = "00"
}

//Disable New Button Func
function DisableNewButton() {
    if(disabled){
        newButton.disabled = true
    }
}

DisableNewButton()

