//EXAMPLE 1
const example1 = () => {
    console.log('Hello')
    console.log('World')
    console.log('!')
    console.log(Math.random())
}

const example2 = example1
const example3 = example1
const example4 = example3

example1()
example2()
example3()
example4()


// Functions accept arguments/parameters 

//EXAMPLE 2
const customLog = () => {
    const text ='Hello World'
    const upperText = text.toUpperCase()
    console.log(upperText)
}

customLog()

//EXAMPLE 3
const upperCaseLog = (text) => {
    const upperText = text.toUpperCase()
    console.log(upperText)
}

upperCaseLog('I')
upperCaseLog('Love')
upperCaseLog('Chocolate')



//EXAMPLE 4

/**
 * Logs a string to the console. The value passed will be randomly either
 * converted to uppercase or lowercase.
 * @param {string} text
 */
// above will be enforced so that an error appears if you pass anything thats not a string

const randomCase = (text) => {
    
    const isUpper = Math.random() >= 0.5 //going to give us a 50/50 chance for is upper to be true or false 
    const method = isUpper ? 'toUpperCase' : 'toLowerCase'
    // const result = text[method]() // we can pass a variable in square brackets depending on what method is it'll use that one, we also need to call the function afterwards(with parenthesis)
    // console.log(result)
    return text[method]()
}

console.log(randomCase('Schalk'))
console.log(randomCase('Hello'))
console.log(randomCase('dashbsdfjbk'))
//if we didnt have return, the above would result to undefined

randomCase('Schalk')
randomCase('Hello')
randomCase('Meow')

// all the above are procedural functions, which are functions that run and they influence something by means of side effects
// it updates something outside of its own scope (side effects outside of the function)

// pure functions are functions that return things
// which help chain functions together
// technically a pure function should always return the same thing when given the same parameter

//EXAMPLE 5
const double = (value) => {
    const result = value * 2
    return result 
} // this function evaluates to whatever the return is

console.log(double(10)) // same as writing console.log(20)

//EXAMPLE 6
if (double(10) === 20) {
    console.log('pass')
} else console.log('fail')

//EXAMPLE 7
// we an add additional parameters 

// @ts-check 

// ts check if you an error if something doesnt make sense 

/**
 * Converts a string to either upper or lower case
 * @param {string} text - The text value to transform
 * 
 * @param {'uppercase' | 'lowercase'} format - How to transform the case. If no value is provided then one will be selected randomly.
 * // type casting (specify which type of string it can be)
 * @returns {string}
 */

// 

// above will be enforced so that an error appears if you pass anything thats not a string
// in order to indicate that a parameter is optional, we wrap it in []
const changeCase = (text, format) => {
    const formatMap = {
        random: Math.random() >= 0.5 ? 'toUpperCase' : 'toLowerCase',
        uppercase: 'toUpperCase',
        lowercase: 'toLowerCase',

    }
    const key = format || 'random' // if it is a string value, use that as a key, otherwise fallback to random as the key
    const method = formatMap[key] // method is determined by key we used in the map
    return text[method]()
}

changeCase('asdasd')

console.log(changeCase('Schalk', 'lowercase')) // add lowercase after comma, if we always want it to be lowercase
console.log(changeCase('Hello'))
console.log(changeCase('Meow'))
