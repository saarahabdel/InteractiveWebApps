// HOW TO ADD EVENT LISTENER 

// <button id="example"> Click Me! </button> 

// create our handler::                  buttonHandler = () => console.log('The button was clicked');   <--- Function that occurs when event happens

// const button = document.querySelector("#example");
// example.addEventListener('click', buttonHandler)    // schalk is the event 

// const example = document.querySelector('#example');
// const exampleHandler = () => {
//     console.log('The button was clicked!')
//     example.innerText = 'Clicked.'                    // changes button text to clicked once clicked 
//     example.disabled = true                           // disables button once clicked 
// };


// example.addEventListener('click', exampleHandler);

// example.addEventListener(
//     'click',
//     (event) => {
//         console.log(event)
//     }
// )

// ------------------------------------------------------------------------------------------------------------------------------------------------- //






// If you have 10 buttons in HTML with no id's ::

// const buttonsArray = Array.from(document.querySelectorAll('button')) 
// - use querySelectorAll to get all our buttons on our page 
// - bc its not a real array, its a node list:
// - we use array from to create an array from the node list that gets returned 


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

const buttonsList = document.querySelectorAll('button')
const buttonsArray = Array.from(buttonsList)

/**
 * Returns a random color value, based on a random index used on 
 * {@link BACKGROUNDS}
 * @returns {string}
 */
const calcRandomColor = () => {

    const maxIndex = BACKGROUNDS.length - 1            // calculate max length of the array    index always 1 shorter than actual array
    const randomIndex = Math.round(maxIndex * Math.random())  // get a random index based off the amount the index can be 
    return BACKGROUNDS[randomIndex]                           // apply that index to backgrounds then return the value 
}


const handler = (event) => {
    const { target } = event  // this will give the HTML node       // look at the target the event was dispatched from, use destructuring
    const { override } = target.dataset || { color: null }              // 1)attempt to destructure color   2) target the data set 
    target.style.color = 'white'   // color of the text
    target.style.background = override || calcRandomColor()        // if there is color, use the color, otherwise fallback to calcRandomColor           

    console.log('clicked!')

    // disable this behavior once selected a button (only ever enable one button)
    // loop over this again
    for (const button of buttonsArray) {
        button.removeEventListener('click', handler)
    
    } 


}
// - our event listener

for (const button of buttonsArray) {               // commented this event listener and pasted in const handler
    button.addEventListener('click', handler)      // useful to declare event listeners as functions outside of where you register it                                                  // in order to remove it again
}                                                  // bc you need that same function in order to remove it again           
// - a for loop to iterate over buttons array 
// - for each button that we loop over, add event listener 


// ----------------------------------------------------------------------------------------------------------------------------------------- //


// SCROLLING: 
window.addEventListener('scroll', () => console.log('Scrolled'))

// THE EVENT OBJECT 
// - all events have event objects 




