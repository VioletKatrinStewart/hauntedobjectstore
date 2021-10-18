import { getProducts } from '../utils.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newHaunted = {
        id: data.get('id'),
        name: data.get('name'),
        image: data.get('image'),
        rating: data.get('rating'),
        price: data.get('price'),
        origin: data.get('origin'),
        description: data.get('description')

    };

    getProducts(newHaunted);
    console.log(newHaunted);
});