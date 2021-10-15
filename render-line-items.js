export function renderLine(cartItem, prodData) {

    const tr = document.createElement('tr');

    const tdNmae = document.createElement('td');
    tdNmae.textContent = prodData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = prodData.price;

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = (cartItem.qty * prodData.price).toFixed(2);

    tr.append(tdNmae, tdPrice, tdQuantity, tdTotal);

    return tr;

}