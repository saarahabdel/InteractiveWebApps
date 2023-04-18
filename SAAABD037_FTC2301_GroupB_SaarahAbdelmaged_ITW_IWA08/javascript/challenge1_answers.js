const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'


const leo = {
    username: leoName,
    balance: leoBalance,
    'access-id': "47afb389-8014-4d0b-aff3-e40203d2107f",
    age: 24,

    address: {
        number: leoNumber,
        street: leoStreet,
        'postal-code': leoPostal,
    },
};

const sarah = {
    username: sarahName + sarahSurname,
    balance: sarahBalance,
    'access-id': "6b279ae5-5657-4240-80e9-23f6b635f7a8",
    age: 62,

    address: {
        number: sarahNumber,
        street: sarahStreet,
        'postal-code': sarahPostal,
    },

}

console.log(leo, leo.address['postal-code'])
console.log(sarah, sarah.address['postal-code'])