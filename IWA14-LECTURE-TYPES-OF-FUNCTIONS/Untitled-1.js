// Function Expression


// Arrow Function Expression 
const example1 = () => {
    return 123

}

console.log(example1())
console.log(example1)


// Traditional Function Expression 
const example2 = function () {
    return 567
}

console.log(example2())


// Function Declaration (CAN HOIST)
function example3 (){
    return 890
}

console.log(example3())


// THIS 
// avoid using 'this'
const counter = {  // 'this' is counter
    value: 120,
    
    add: function () {
        this.value = this.value + 1
    },

    minus: function () {
        this.value = this.value - 1
    }
}

counter.add()
counter.add()
counter.add()
counter.minus()
console.log(counter.value) 

// Recursion 
// one can run loops by means of recursion
// loop over arrays

const example = (value) => {
    const innerValue = value + 1

    if (value < 20) {
        return example(innerValue)
    } else {
        return innerValue
    }
}
const result = example(1)
console.log(result)



