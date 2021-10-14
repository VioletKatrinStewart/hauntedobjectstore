//export const cart = [
    //{ id: '1', qty: 6 },
    //{ id: '4', qty: 5 },
//]; 

import { hauntedStuff } from '../data/hauntedstuff.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const cartData = findById(cartItem.id, hauntedStuff);
    console.log('cartItem: ', cartItem);
}

const tr = document.createElement('tr');
const tdName = document.createElement('td');
tdName.textContent = hauntedStuff.name;
const tdPrice = document.createElement('td');
tdPrice.textContent = hauntedStuff.price;
const tdQty = document.createElement('td');
tdQty.textContent = cartItem.quantity;
const tdTotal = document.createElement('td');
tdTotal.textContent = cartItem.quantity * hauntedStuff.price;

tr.append(tdName, tdPrice, tdQty, tdTotal);
tbody.appendChild(tr);