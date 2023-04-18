const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0


shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED

let shipping = 0
let currency = "R"
let country = "RSA"
let customers = 1
const total = shoes + batteries + pens + shirts + toys

if (country === "RSA") {
    shipping = 400; currency = "R";
} else if (country === "NAM") {
    shipping = 600; currency = "$";
} else if (country === "NK") {
    console.log(BANNED_WARNING)
} else {
    shipping = 800; currency ="$";
}


if (total >= 1000 && currency === "R" && customers === 1) { 
    shipping = 0;
} else if (total >= 60 && currency === "$" && customers === 1) {
    shipping = 0;
} else {
    console.log(FREE_WARNING) && console.log(total);
}

if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
}


console.log("Price: " + currency + total + shipping)

