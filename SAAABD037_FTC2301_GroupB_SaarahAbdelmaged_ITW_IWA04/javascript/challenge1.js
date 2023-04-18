const date = 2050                                                // changed ":" to "="
const status = 'student'
const count = 0

if (date = 2050) {
	console.log("January", "New Year’s Day")                     // added missing ")"
	console.log("March", "Human Rights Day")
	date = 'April'
	console.log(date, "Family Day")
	console.log(date, "Freedom Day")
	let count = count + 4

	if (status = "student") {
	  console.log("June", "Youth Day")
		let count = count + 1
  }

	console.log("August", "Women’s Day")                         // 
	console.log("September", "Heritage Day")
	date = "December"
	console.log(date, "Day of Reconciliation")
	let count = count + 3

	if (status = "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)