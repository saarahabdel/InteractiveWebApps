<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LMS Pro</title>
    <script src="/scripts.js" defer></script>
  </head>
  <body>
    <div id="book1">
      <h3>A Good Book</h3>
      <p>Status: <span class="status" style="color: purple">overdue</span></p>
      <button class="reserve">Reserve</button>
      <button class="checkout">Check Out</button>
      <button class="checkin" style="color: green">Check In</button>
    </div>

    <div id="book2">
      <h3>The Book of Books</h3>
      <p>Status: <span class="status" style="color: purple">reserved</span></p>
      <button class="reserve">Reserve</button>
      <button class="checkout">Check Out</button>
      <button class="checkin" style="color: green">Check In</button>
    </div>
    
    <div id="book3">
      <h3>Another Book</h3>
      <p>Status: <span class="status" style="color: purple">shelf</span></p>
      <button class="reserve">Reserve</button>
      <button class="checkout">Check Out</button>
      <button class="checkin" style="color: green">Check In</button>
    </div>
  </body>
</html>
 

 

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

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'