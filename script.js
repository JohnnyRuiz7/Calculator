let a
let b
let operator

function add(a, b) {
    if ((a + b).toString().includes('.')) {
        return (a + b).toFixed(2)
    }
    else return a + b
}

function substract(a, b) {
    if ((a - b).toString().includes('.')) {
        return (a - b).toFixed(2)
    }
    else return a - b
}

function multiply(a, b) {
    if ((a * b).toString().includes('.')) {
        return (a * b).toFixed(2)
    }
    else return a * b
}

function divide(a, b) {
    if (b == 0) {
        return display.textContent = 'LOL NO >:v'
    }
    else if (a % b != 0) {
        return (a / b).toFixed(2)
    }
    else return a / b
}

const display = document.querySelector('.display')
const ButtonNumbers = document.querySelectorAll('.number')
const decimal = document.querySelector('.decimal')
const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')
const percent = document.querySelector('.percent')
const addition = document.querySelector('.addition')
const substraction = document.querySelector('.substraction')
const multiplication = document.querySelector('.multiplication')
const division = document.querySelector('.division')
const equal = document.querySelector('.equal')
const negative = document.querySelector('.negative')

ButtonNumbers.forEach(function(e) 
    {e.addEventListener('click', function(e) {
        if (display.textContent == '') {
            display.textContent = e.target.textContent
            b = undefined
        }
        else if (display.textContent == 'Too much!!' || display.textContent == 'LOL NO >:v') {
            display.textContent = ''
        }
        else if (b) {
            display.textContent = e.target.textContent
            b = undefined
        }
        else {
            display.textContent += e.target.textContent
            checkDisplay()
        }
    })
})

window.addEventListener('keydown', function(e) {
    const number =  document.querySelector(`.number[data-key="${e.keyCode}"`)
    const addition = document.querySelector(`.addition[data-key="${e.keyCode}"`)
    const substraction = document.querySelector(`.substraction[data-key="${e.keyCode}"`)
    const multiplication = document.querySelector(`.multiplication[data-key="${e.keyCode}"`)
    const division = document.querySelector(`.division[data-key="${e.keyCode}"`)
    const equal = document.querySelector(`.equal[data-key="${e.keyCode}"`)
    const backspace = document.querySelector(`.backspace[data-key="${e.keyCode}"`)
    const decimal = document.querySelector(`.decimal[data-key="${e.keyCode}"`)
    const clear = document.querySelector(`.clear[data-key="${e.keyCode}"`)
    const percent = document.querySelector(`.percent[data-key="${e.keyCode}"`)
    if (!number && !addition && !substraction && !multiplication &&
        !division && !equal && !backspace && !decimal && !clear && !percent) return

    else if (division && e.shiftKey) {
        checkFirstNumber()
        checkDisplay()
        operator = 'division'
    }

    else if (percent && e.shiftKey) {
        if (display.textContent != 0) {
            display.textContent = (+display.textContent / 100).toFixed(2)
        }
        checkDisplay()
    }
    
    else if (number) {
        if (display.textContent == 0) {
            display.textContent = number.textContent
            b = undefined
        }
        else if (b) {
            display.textContent = number.textContent
            b = undefined
        }
        else {
            display.textContent += number.textContent
            checkDisplay()
        }
    }
    else if (addition && e.shiftKey) {
        checkFirstNumber()
        checkDisplay()
        operator = 'multiplication'
    }

    else if (addition) {
        checkFirstNumber()
        checkDisplay()
        operator = 'addition'
    }
    
    else if (substraction) {
        checkFirstNumber()
        checkDisplay()
        operator = 'substraction'
    }

    else if (equal) {
        operate()
        checkDisplay()
        a = undefined
    }

    else if (backspace) {
        display.textContent = display.textContent.slice(0,display.textContent.length - 1)
    }

    else if (decimal) {
        if (display.textContent == '') {
            display.textContent = 0 + '.'
        }
        else if (b && !display.textContent.includes('.')) {
            display.textContent += '.'
            b = undefined
        }
        else if (!display.textContent.includes('.')) {
            display.textContent += decimal.textContent
        }
    }
    else if (clear) {
        display.textContent = ''
        a = undefined
    }
    
})

decimal.addEventListener('click', function(e) {
    if (display.textContent == '') {
        display.textContent = 0 + '.'
    }
    else if (display.textContent == 'Too much!!' || display.textContent == 'LOL NO >:v') {
        display.textContent = ''
    }
    else if (b && !display.textContent.includes('.')) {
        display.textContent += '.'
        b = undefined
    }
    else if (!display.textContent.includes('.')) {
        display.textContent += e.target.textContent
    }
})

clear.addEventListener('click', function() {
    display.textContent = ''
    a = undefined
})

addition.addEventListener('click', function() {
    checkDisplay()
    checkFirstNumber()
    operator = 'addition'
})

substraction.addEventListener('click', function() {
    checkDisplay()
    checkFirstNumber()
    operator = 'substraction'
})

multiplication.addEventListener('click', function() {
    checkDisplay()
    checkFirstNumber()
    operator = 'multiplication'
})

division.addEventListener('click', function() {
    checkDisplay()
    checkFirstNumber()
    operator = 'division'
})

equal.addEventListener('click', function() {
    checkDisplay()
    operate()
    a = undefined
})

backspace.addEventListener('click', function() {
    display.textContent = display.textContent.slice(0,display.textContent.length - 1)
})

percent.addEventListener('click', function() {
    if (display.textContent != 0) {
    display.textContent = (+display.textContent / 100).toFixed(2)
    }
    checkDisplay()
})

negative.addEventListener('click', function() {
    display.textContent = '-' + display.textContent
})

function checkFirstNumber() {
    if (!a) {
        a = +display.textContent
        display.textContent = ''
        }
    else if (a && display.textContent != '') {
        operate()
        display.textContent = a
    }
    else if (display.textContent != '') {
        operate()
    }
}

function checkDisplay() {
    if (display.textContent.length > 10) {
        display.textContent = 'Too much!!'
    }
    else if (display.textContent == 'NaN') {
        display.textContent = 0
    }
    else if (display.textContent == 'Too much!!' || display.textContent == 'LOL NO >:v') {
        display.textContent = ''
        a = undefined
    }
}

function operate() {
    b = +display.textContent
    if (operator == 'addition') {
        display.textContent = add(a,b)
        a = +display.textContent
    }
    else if (operator == 'substraction') {
        display.textContent = substract(a,b)
        a = +display.textContent
    }
    else if (operator == 'multiplication') {
        display.textContent = multiply(a,b)
        a = +display.textContent
    }
    else if (operator == 'division') {
        display.textContent = divide(a,b)
        a = +display.textContent
    }
}