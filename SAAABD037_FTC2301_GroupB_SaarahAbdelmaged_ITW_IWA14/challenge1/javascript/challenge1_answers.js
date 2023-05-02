let firstName = 'John';
let age = 35;
let hobby = 'Coding';

const logTwice = (parameter) => { // had to pass the parameter in () to call it in code block
    console.log(parameter)
    console.log(parameter)
}

function hobby1 () {  // changed function name bc was same as hobby variable
    logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

hobby1()