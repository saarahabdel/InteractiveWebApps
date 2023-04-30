let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = (calculated) => { 
    const isString = (typeof calculated) === 'numerical-string'
    const calculatedAsNumber = isString ? calculated : parseInt(calculated)
    calculated === calculatedAsNumber + 1 

    return calculated[calculatedAsNumber]()
}

console.log(calculated)
console.log(state)
console.log(user)

const calcUser = () => {
  logCalc
  if (calculated >= 2) { 
    user = 'John' 
  }
  if (calculated > 2) {
    state = 'requesting'
  }  
  if (calculated > 3) {
    state = 'idle'
  } 
}

const checkUser = (user, calculated) => {
	if (user === 'John' && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()