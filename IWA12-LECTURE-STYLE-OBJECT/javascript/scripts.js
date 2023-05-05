const MAX_NUMBER = 15 
const MIN_NUMBER = -5 //those are global constants 
const STEP_AMOUNT = 1

const elements = {
    number: document.querySelector('[data-key="number"]'),
    subtract: document.querySelector('[data-key="subtract"]'),
    add: document.querySelector('[data-key="add"]'),

}


const updateColor = () => {
    const value = parseInt(elements.number.value)
    const isEdge = value >= MAX_NUMBER || value <= MIN_NUMBER

    if (isEdge) {
        elements.number.style.color = 'red'
    } else {
        elements.number.style.color = '' // sets to default in line styling
    }
}
console.log(number, subtract, add)


const subtractHandler = () => {
    const newValue = parseInt(element.number.value) - STEP_AMOUNT 
    elements.number.value = newValue

    if (elements.add.disabled === true) {
        elements.add.disabled = false 
    }

    if (newValue <= MIN_NUMBER) {
        elements.subtract.disabled = true
        } 

    updateColor()
} //if wanna asign value to piece of memory, add equal to sign. If wanna asign behavior, add equal , brackets then arrow
const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    elements.number.value = newValue

    if (elements.subtract.value === true) {  //if subtract is disabled then we want subtract disabled to be removed 
        elements.subtract.disabled = false 
    }

    if (newValue >= MAX_NUMBER) {
        elements.add.disabled = true
    }

    updateColor()
}
// an event listener listens for an event, when it happens it has to do something
elements.add.addEventListener('click', addHandler ) //event handlers are after the comma, declared as functions
elements.subtract.addEventListener('click', subtractHandler) //means: when subtract clicked, run subtract handler