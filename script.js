// Function to add an item to the cart
function addToCart(product, price) {
    // Retrieve the cart data from local storage
    var cartData = localStorage.getItem('cartData');
    var cartItems = cartData ? JSON.parse(cartData) : [];
  
    // Check if the item already exists in the cart
    var existingItem = cartItems.find(function(item) {
      return item.product === product;
    });
  
    if (existingItem) {
      // Item already exists, increment the quantity
      existingItem.quantity++;
    } else {
      // Item doesn't exist, add it to the cart
      var newItem = {
        product: product,
        price: price,
        quantity: 1
      };
      cartItems.push(newItem);
    }
  
    // Update the cart data in local storage
    localStorage.setItem('cartData', JSON.stringify(cartItems));
  
    // Display the updated cart items
    displayCartItems();
  }
  
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
      cartItem.textContent = cartItems[i].product + ' - Quantity: ' + cartItems[i].quantity + ' - $' + (cartItems[i].price * cartItems[i].quantity).toFixed(2);
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
  