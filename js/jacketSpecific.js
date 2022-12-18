import { jackets } from "./allJackets.js";
import { shopping-cart } from "./shopping-cart.js";

/*
{
   <div class="productbox">
  <a href="jacket_1.html" >
  <img src="/images/products/RainyDays_Jacket1.png" alt="The Strong Jacket" class="product1"></img>
</a>
  <div class="nametag"><h2>The Strong Jacket<p class="pricetag">$175</p></h2></div>
</div> 
}*/

const addToCartButton = document.getElementById("buyNow");
const productSection = document.getElementById("product-section");

/* const jacketSpecific = document.getElementById("product-box");*/

function displayJackets() {
  Object.keys(jackets).forEach((jacketId) => {
    const jacket = jackets[jacketId];
    productSection.innerHTML += `
        <div class=jacket-display">
        <a href="./allJackets.html?id=${jacketId}">
        <p class="display-title">${jacket.name}</p>
        <img src="${jacket.image}" alt="Image of the ${jacket.name} jacket" />
        <p class="jacket-price">Price <strong>$${jacket.jacketprice}</strong></p>
        </a>
        </div>`;
  });
}

if (displayJackets) {
  displayJackets();
  displayJackets();
}

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
