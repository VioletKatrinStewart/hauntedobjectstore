export function findById(id, items){
    for (let item of items)
        if (item.id === id)
            return item;
}  
export function getCart(){
    // null
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
    //console.log(id);
    const cart = getCart();
    const cartItem = findById(id, cart);
    //console.log('hi');
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);

    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}


export function calculateOrderTotal(cart, hauntedStuff) {
    let orderTotal = 0;
    //console.log(cart);
    for (let item of cart){
        const hauntedName = findById(item.id, hauntedStuff);
        orderTotal = orderTotal + hauntedName.price * item.qty;
    }
    return orderTotal;
}

export function clearCart() {
    localStorage.removeItem('CART');
}

import { hauntedStuff } from './data/hauntedstuff.js';

export function getProducts() {
    let productString = localStorage.getItem('PRODUCTS');
    const productObject = JSON.parse(productString);

    
    if (!productObject) {
        let productString = JSON.stringify(hauntedStuff);
        localStorage.setItem('PRODUCTS', productString);
       
    }
    return productObject || hauntedStuff;
}