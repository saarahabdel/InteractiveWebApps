const MAX_NUMBER = 15 
const MIN_NUMBER = -5 //those are global constants 
const STEP_AMOUNT = 5



const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

//console.log(number, subtract, add)


const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT 
    number.value = newValue

    if (add.disabled === true) {
        add.disabled = false 
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
        } 
} //if wanna asign value to piece of memory, add equal to sign. If wanna asign behavior, add equal , brackets then arrow
const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue

    if (subtract.value === true) {  //if subtract is disabled then we want subtract disabled to be removed 
        subtract.disabled = false 
    }

    if (newValue >= MAX_NUMBER) {
    add.disabled = true
    }
}
// an event listener listens for an event, when it happens it has to do something
add.addEventListener('click', addHandler ) //event handlers are after the comma, declared as functions
subtract.addEventListener('click', subtractHandler) //means: when subtract clicked, run subtract handler