firstName = 'John';
age = 35;
occupation = 'Coding';

const logTwice = () => {
  console.log(hobby)
  console.log(hobby)
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${occupation}!`)
  return logTwice
}

console.log(hobby())