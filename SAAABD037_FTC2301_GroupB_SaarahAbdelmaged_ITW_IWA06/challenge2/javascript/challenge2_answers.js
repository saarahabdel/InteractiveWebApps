const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;


const taxAsDecimal = parseInt(tax)/100;
const newSalary = salary - (taxAsDecimal*salary);
const balance = newSalary - rent - food -transport;

if ((hourOfDay === 0) && (minuteOfDay === 0)) {
    console.log("R", balance.toFixed(2));
} else{
    console.log(null);
}

