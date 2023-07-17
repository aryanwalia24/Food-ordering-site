// Function to display the cart items
function displayCartItems() {
    // Retrieve the cart data from local storage
    var cartData = localStorage.getItem('cartData');
    var cartItems = cartData ? JSON.parse(cartData) : [];
  
    // Display the cart items
    var cartDisplay = document.getElementById('cart-display');
    cartDisplay.innerHTML = '';
    for (var i = 0; i < cartItems.length; i++) {
      var cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.textContent = cartItems[i].product + ' - Quantity: ' + cartItems[i].quantity;
      cartDisplay.appendChild(cartItem);
    }
  
    // Update the total orders and total price
    var totalOrders = cartItems.reduce(function(total, item) {
      return total + item.quantity;
    }, 0);
    var totalPrice = cartItems.reduce(function(total, item) {
      return total + (item.price * item.quantity);
    }, 0);
  
    // Update the total orders and total price display
    var totalOrdersDisplay = document.getElementById('total-orders');
    var totalPriceDisplay = document.getElementById('total-price');
    totalOrdersDisplay.textContent = totalOrders;
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
  }
  
  // Function to clear the cart
  function clearCart() {
    // Clear the cart data in local storage
    localStorage.removeItem('cartData');
  
    // Clear the cart display
    var cartDisplay = document.getElementById('cart-display');
    cartDisplay.innerHTML = '';
  
    // Reset the total orders and total price display
    var totalOrdersDisplay = document.getElementById('total-orders');
    var totalPriceDisplay = document.getElementById('total-price');
    totalOrdersDisplay.textContent = '0';
    totalPriceDisplay.textContent = '0.00';
  }
  
  // Display the cart items when the page loads
  displayCartItems();
  
  // Attach event listener to the clear cart button
  var clearCartButton = document.getElementById('clear-cart');
  clearCartButton.addEventListener('click', clearCart);