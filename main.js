// pluslar
let plus = document.querySelector('.plus')
let plus1 = document.querySelector('.plus1')
let plus2 = document.querySelector('.plus2')

// 0 lar
let one = document.querySelector('.one')
let three = document.querySelector('.three')
let five = document.querySelector('.five')
let seven = document.querySelector('.seven')

// minuslar 
let plus3 = document.querySelector('.plus3')
let plus4 = document.querySelector('.plus4')
let plus5 = document.querySelector('.plus5')

// start, stop, clear
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let clear = document.querySelector('.clear')

start.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

stop.addEventListener('click', () => {
    clearInterval(interval)
})

clear.addEventListener('click', () => {
    clearInterval(interval)
    hour = 00
    minute = 00
    second = 00
    millesecond = 00
    one.textContent = "00"
    three.textContent = "00"
    five.textContent = "00"
    seven.textContent = "00"
})

let hour = 00,
    minute = 00,
    second = 00,
    millesecond = 00,
    interval



function startTimer() {
    millesecond++
    if (millesecond < 9) {
        seven.innerText = "0" + millesecond
    }
    if (millesecond > 9) {
        seven.innerText = millesecond
    }
    if (millesecond > 60) {
        second++
        five.innerText = "0" + second
        millesecond  = 0
        seven.innerText = "0" + millesecond
    }

    if (second < 9) {
        five.innerText = "0" + second
    }
    if (second > 9) {
        five.innerText = second
    }
    if (second > 60) {
        minute++
        three.innerText = "0" + minute
        second  = 0
        five.innerText = "0" + second
    }

    if (minute < 9) {
        three.innerText = "0" + minute
    }
    if (minute > 9) {
        three.innerText = minute
    }
    if (minute > 60) {
        hour++
        one.innerText = "0" + hour
        minute  = 0
        minute.innerText = "0" + minute
    }

    if (hour > 9) {
        minute.innerText = hour
    }
}