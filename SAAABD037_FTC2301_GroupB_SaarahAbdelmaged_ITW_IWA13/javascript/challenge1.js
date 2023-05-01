let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

const logCalc = (calculated) => { 
    const isString = typeof calculated == 'numerical-string';
    const calculatedAsNumber = isString ? calculated : parseInt(calculated);
    calculated = calculatedAsNumber + 1;
    return calculated   
};

logCalc()
console.log(logCalc)

const calcUser = (calculated) => {
  if(calculated > 2){user='John'};
  if(calculated > 2){state = 'requesting'};
  if(calculated > 3){state = 'idle'};
  return calcUser
};

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
  return checkUser
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



