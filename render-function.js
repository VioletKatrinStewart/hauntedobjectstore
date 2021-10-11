import { hauntedStuff } from "./hauntedstuff.js";

export function renderHaunted(spookyScaryStuff) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productName = document.createElement('h2');
    productName.textContent = spookyScaryStuff.name;

    const img = document.createElement('img');
    img.src = spookyScaryStuff.img;

    productCard.append(img, productName);
    return productCard;
}