import { hauntedStuff } from "./hauntedStuff.js";
import { renderHaunted } from "./render-function.js";

const productList = document.getElementById('product-list');

for (let spookyScaryStuff of hauntedStuff) {
  const spookyCard = renderHaunted(spookyScaryStuff);
  productList.append(spookyCard);

}