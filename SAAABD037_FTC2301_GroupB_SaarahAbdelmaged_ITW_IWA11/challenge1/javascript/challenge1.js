<!-- index.html -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The JS Bakery</title>
    <script src="./script.js" defer></script>
</head>

<body>
    <h1>The JS Bakery</h1>

    <h2>Orders</h2>

    <section>
        <h3>Order 1</h3>

        <dl 
            data-key="order1" 
            data-biscuits="10" 
            data-donuts="13" 
            data-pancakes="0" 
            data-delivered="false"
        >
            <div class="biscuits">
                <dt>Biscuits</dt>
                <dd class="count">Loading...</dd>
            </div>

            <div class="donuts">
                <dt>Donuts</dt>
                <dd class="count">Loading...</dd>
            </div>

            <div class="pancakes">
                <dt>Pancakes</dt>
                <dd class="count">Loading...</dd>
            </div>

            <div class="status">
                <dt>Status</dt>
                <dd>Loading...</dd>
            </div>
        </dl>

    </section>

    <section>
        <h3>Order 2</h3>

        <dl 
            data-key="order2" 
            data-biscuits="5" 
            data-donuts="0" 
            data-pancakes="2" 
            data-delivered="false"
        >
            <div class="biscuits">
                <dt>Biscuits</dt>
                <dd class="count">Loading...</dd>
            </div>

            <div class="donuts">
                <dt>Donuts</dt>
                <dd class="count">Loading...</dd>
            </div>

            <div class="pancakes">
                <dt>Pancakes</dt>
                <dd class="count">Loading...</dd>
            </div>

            <div class="status">
                <dt>Status</dt>
                <dd>Loading...</dd>
            </div>
        </dl>
    </section>


    <section>
        <h3>Order 3</h3>

        <dl 
            data-key="order3" 
            data-biscuits="12" 
            data-donuts="11" 
            data-pancakes="15" 
            data-delivered="true"
        >
            <div class="biscuits">
                <dt>Biscuits</dt>
                <dd class="count">Loading...</dd>
            </div>

            <div class="donuts">
                <dt>Donuts</dt>
                <dd class="count">Loading...</dd>
            </div>

            <div class="pancakes">
                <dt>Pancakes</dt>
                <dd class="count">Loading...</dd>
            </div>

            <div class="status">
                <dt>Status</dt>
                <dd>Loading...</dd>
            </div>
        </dl>
    </section>
</body>

</html>
 

 

// script.js

const 1-root = document(order1),
const 1-biscuits: document(biscuits),
const 1-donuts: document(donuts),
const 1-pancakes: document(pancakes),
const 1-status: document(status)

const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending