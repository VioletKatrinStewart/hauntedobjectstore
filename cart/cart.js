//export const cart = [
    //{ id: '1', qty: 6 },
    //{ id: '4', qty: 5 },
//]; 
import { findById, getCart, clearCart, calculateOrderTotal, getProducts } from '../utils.js';
//import { hauntedStuff } from '../data/hauntedstuff.js';
//import { cart } from '../data/cart-data.js';
import { renderLine } from '../render-line-items.js';

let hauntedStuff = getProducts();

const orderButton = document.getElementById('order-button');

const cart = getCart();
const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const cartData = findById(cartItem.id, hauntedStuff);
    const tr = renderLine(cartItem, cartData);
    //console.log(cartItem, cartData);
    tbody.appendChild(tr);
    //console.log('cartItem: ', cartItem);
}



const hauntedTotal = document.getElementById('total');
hauntedTotal.textContent = calculateOrderTotal(cart, hauntedStuff) + ` = total`;

orderButton.addEventListener('click', () =>{
    //console.log('click');
    clearCart();
    //console.log('clear cart');
    alert('Your order has been placed!');
    window.location.replace('..');
}); 