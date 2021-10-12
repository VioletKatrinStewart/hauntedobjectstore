//import { hauntedStuff } from './hauntedstuff.js';

export function renderHaunted(spookyScaryStuff) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productName = document.createElement('h2');
    productName.textContent = spookyScaryStuff.name;

    const img = document.createElement('img');
    img.src = spookyScaryStuff.img;

    const productRating = document.createElement('h2');
    productRating.textContent = `cursed rating ${spookyScaryStuff.rating} /10`;

    const productPrice = document.createElement('h2');
    productPrice.textContent = `${spookyScaryStuff.price} dollars`;

    const productOrigin = document.createElement('h2');
    productOrigin.textContent = spookyScaryStuff.origin;

    const productDescription = document.createElement('p');
    productDescription.textContent = spookyScaryStuff.description;

    productCard.append(img, productName, productRating, productPrice, productOrigin, productDescription);
    return productCard;
}