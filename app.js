import { hauntedStuff } from './data/hauntedstuff.js';
import { renderHaunted } from './render-haunted.js';
import { addItem } from './utils.js';

const productList = document.getElementById('product-list');

for (let spookyScaryStuff of hauntedStuff) {
    const spookyCard = renderHaunted(spookyScaryStuff);
    productList.append(spookyCard);

};

const addButtons = document.querySelectorAll('.add-button'); // list of all our buttons
for (let addBtn of addButtons){
    addBtn.addEventListener('click', ()=>{
        addItem(addBtn.id);
        alert('Added item to cart');
    });
}