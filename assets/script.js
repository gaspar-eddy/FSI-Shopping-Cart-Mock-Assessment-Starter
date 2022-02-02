// Declare variables
let cartItems = 1

var totalQuantity = document.querySelector('.total-quantity')

// Set up plus button
let plusButton = document.getElementById('quantity-up')
plusButton.addEventListener('click', function(){
    cartItems = cartItems + 1
    console.log(cartItems)
    totalQuantity.textContent = `Quantity: ${cartItems}`
})

// Set up minus button
let minusButton = document.getElementById('quantity-down')
minusButton.addEventListener('click', function(){
    
    console.log(cartItems)
    if (cartItems > 0){
        cartItems = cartItems - 1
        totalQuantity.textContent = `Quantity: ${cartItems}`
    } else {
        totalQuantity.textContent = `Quantity: 0`
    }
})

