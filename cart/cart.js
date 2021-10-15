//export const cart = [
    //{ id: '1', qty: 6 },
    //{ id: '4', qty: 5 },
//]; 
import { findById, getCart } from '../utils.js';
import { hauntedStuff } from '../data/hauntedstuff.js';
//import { cart } from '../data/cart-data.js';
import { renderLine } from '../render-line-items.js';

const cart = getCart();
const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const cartData = findById(cartItem.id, hauntedStuff);
    const tr = renderLine(cartItem, cartData);
    //console.log(cartItem, cartData);
    tbody.appendChild(tr);
    //console.log('cartItem: ', cartItem);
}