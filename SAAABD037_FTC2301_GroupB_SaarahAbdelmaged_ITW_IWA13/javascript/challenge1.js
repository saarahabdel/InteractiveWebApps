let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = (calculated) => { 
  const isString = typeof calculated == 'numerical-string';
  const calculatedAsNumber = isString ? calculated : parseInt(calculated);
    calculated = calculatedAsNumber + 1;
    //console.log(calculated)
    return calculated  
};
const result = logCalc(calculated)
console.log(result)
//console.log(logCalc())

const calcUser = (result) => {
  if(result >= 2) {
    return user='john'
  };
  if(result >= 2){
    return state = 'requesting'
  } else {
    return state = 'idle'
  };
};
console.log(user)
console.log(state)
console.log(calcUser())

// const checkUser = () => {
// 	if (user && state === 'requesting') {
// 		console.log(`User: ${user} (${calculated})`)
// 	}
//   return checkUser
// }

// // Only allowed to change code above

// checkUser()
// calcUser()

// checkUser()
// calcUser()

// checkUser()
// calcUser()

// checkUser()
// calcUser()

// checkUser()
// calcUser()



