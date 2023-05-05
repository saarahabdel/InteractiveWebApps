// HOW TO ADD EVENT LISTENER 

// <button id="example"> Click Me! </button> 

// create our handler::                  buttonHandler = () => console.log('The button was clicked');   <--- Function that occurs when event happens

// const button = document.querySelector("#example");
// example.addEventListener('click', buttonHandler)    // schalk is the event 

const example = document.querySelector('#example');
const exampleHandler = () => {
    console.log('The button was clicked!')
    example.innerText = 'Clicked.'                    // changes button text to clicked once clicked 
    example.disabled = true                           // disables button once clicked 
};


example.addEventListener('click', exampleHandler);

// ------------------------------------------------------------------------------------------------------------------------------------------------- //


// If you have 10 buttons in HTML with no id's ::

// const buttonsArray = Array.from(document.querySelectorAll('button')) 
// - use querySelectorAll to get all our buttons on our page 
// - bc its not a real array, its a node list:
// - we use array from to create an array from the node list that gets returned 

const handler = () => {
    console.log('clicked!')
}
// - our event listener

for (const button of buttonsArray) {
    button.addEventListener('click', handler)

}
// - a for loop to iterate over buttons array 
// - for each button that we loop over, add event listener 

const BACKGROUNDS = [
    'red',
    'blue',
    'green',
    'purple',
    'brown',
    'black'
]
// - when someone clicks a button we want to assign it a random color 
// - this random color we can grab from an array above (BACKGROUNDS array)

const calcRandomColor = () => {

}


// SCROLLING: 
window.addEventListener('scroll', () => console.log('Scrolled'))


