// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
const Status0 = document.querySelector('#book1 .status')
const reserve0 = document.querySelector('#book1 .reserve')
const checkout0 = document.querySelector('#book1 .checkout')
const checkin0 = document.querySelector('#book1 .checkin')

const Status1 = document.querySelector('#book2 .status')
const reserve1 = document.querySelector('#book2 .reserve')
const checkout1 = document.querySelector('#book2 .checkout')
const checkin1 = document.querySelector('#book2 .checkin')

const Status2 = document.querySelector('#book3 .status')
const reserve2 = document.querySelector('#book3 .reserve')
const checkout2 = document.querySelector('#book3 .checkout')
const checkin2 = document.querySelector('#book3 .checkin')

checkin0.style.color = ''
Status0.style.color = STATUS_MAP.overdue.color
reserve0.disabled = STATUS_MAP.overdue.canReserve ? false:true
checkout0.disabled = STATUS_MAP.overdue.canCheckout ? false:true
checkin0.disabled = STATUS_MAP.overdue.canCheckIn ? false:true

checkin1.style.color = ''
Status1.style.color = STATUS_MAP.reserved.color
reserve1.disabled = STATUS_MAP.reserved.canReserve ? false:true
checkout1.disabled = STATUS_MAP.reserved.canCheckout ? false:true
checkin1.disabled = STATUS_MAP.reserved.canCheckIn ? false:true

checkin2.style.color = ''
Status2.style.color = STATUS_MAP.shelf.color
reserve2.disabled = STATUS_MAP.shelf.canReserve ? false:true
checkout2.disabled = STATUS_MAP.shelf.canCheckout ? false:true
checkout2.disabled = STATUS_MAP.shelf.canCheckIn ? false:true

