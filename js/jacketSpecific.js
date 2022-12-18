import { jackets } from "./allJackets.js";
import { addToCart, cart } from "./shoppingCart.js";

const addToCartButton = document.getElementById("buyNow");
const productSection = document.getElementById("product-section");
const productBox = document.getElementById("productbox");
const jacketSpecific = document.getElementById("jacket-specific");

function displayJackets() {
  Object.keys(jackets).forEach((jacketId) => {
    const jacket = jackets[jacketId];
    productSection.innerHTML += `
        <div class=jacket-display">
        <a href="./jacket_specific.html?id=${jacketId}">
        <p class="display-title">${jacket.name}</p>
        <img src="${jacket.image}" alt="Image of the ${jacket.name} jacket" />
        <p class="jacket-price">Price <strong>$${jacket.jacketprice}</strong></p>
        </a>
        </div>`;
  });
}

displayJackets();
displayJackets();

console.log(productSection); //tried to see if console log would show what I wanted with the function

if (jacketSpecific) {
  const jacketId = new URLSearchParams(window.location.search).get("id");
  const jacket = jacket[jacketId];
  jacketSpecific.innerHTML = `
    <div>
    </div>
    `;
  jacketHeader.innerHTML = `
    ${jacket.name.toUpperCase()}`;
  addToCartButton.addEventListener("click", function (e) {
    e.preventDefault();
    addToCartButton(jacketId);
  });
}
