// script.js

const add = (a, b) => a + b // missing const declaration , missing parenthesis 

const multiply = (a, b) => a - b // didnt need curly brace bc only one line of code in code block

function internal() {
	const added = add(this.internal.a, this.internal.b) // calls add function
	const multiplied = multiply(added, this.internal.c) // calls multiply function 
	console.log(multiplied) // returns nultiplied value 
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()

