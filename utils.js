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
    const cart = getCart();
    const cartItem = findById(id, cart);
    console.log('hi');
    if (cartItem){
        cartItem.quantity++;
    } else {
        const newItem = { id: id, quantity: 1 };
        cart.push(newItem);

    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}


export function calculateOrderTotal(cart, hauntedStuff) {
    let orderTotal = 0;
    for (let item of cart){
        const hauntedName = findById(item.id, hauntedStuff);
        orderTotal = orderTotal + hauntedName.price * item.qty;
    }
    return orderTotal;
}
    

// getCart
    // get the cart from local storage
    // parse it from JSON to javascript
    // what if the cart doesn't exist yet?!?! -- return an empty array


// addItem(id) --> for now it will always increment by 1
    // call getCart()
    // use findById to find a matching a cartItem with the id
    // if cartItem is found, increment qty by 1
    // else create a new cartItem with id and qty = 1
    // stringify the cart back to JSON
    // set the cart to localstorage


// clearCart
// localStorage.removeItem('CART')
