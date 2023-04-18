const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'


const primaryValid = Number(primaryPhone);
const secondaryValid = Number(secondaryPhone);



if (!isNaN(primaryPhone)){
    console.log('Primary phone is valid numerical string:', primaryPhone);
} else {
    console.log('Primary phone is an invalid string')
}

if (!isNaN(secondaryPhone)){
    console.log('Secondary phone is valid numerical string:', primaryPhone);
} else {
    console.log('Secondary phone is an invalid string');
}

