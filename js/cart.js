/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.querySelector('tbody').innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.querySelector('tbody');

  // TODO: Iterate over the items in the cart
  for (let i in cart.items) {
    // TODO: Create a TR
    let tr = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    let tdOne = document.createElement('td');
    let tdTwo = document.createElement('td');
    let tdThree = document.createElement('td');
    tdOne.textContent = 'delete';
    tdOne.id = i;
    tdOne.className = 'removable';
    tdTwo.textContent = cart.items[i].quantity;
    tdThree.textContent = cart.items[i].product;
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);
    tbody.appendChild(tr);


  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
