// import { jackets } from "./allJackets.js";
// import { Agent } from "https";
// import { addToCart, cart } from "./shoppingCart.js";
// const https = require('https');

const basicUrl = "http://rainydays.joakimkjode.com/wp-json/wc/store/products";

// const consumerKey = "ck_53abade315c530634e6a44565d389ae74a018240";

// const consumerSecret = "cs_0db67aeaa010f367a5d41130298e1d36d2211963";

// const url = `${basicUrl}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

const addToCartButton = document.getElementById("buyNow");
const productSection = document.getElementById("product-section");
const productBox = document.getElementById("productbox");
const jacketSpecific = document.getElementById("jacket-specific");
const jacketName = new URLSearchParams(window.location.search).get("name");

function getFirstTwo(number) {
  return number.slice(0, 2);
}

const fetchJacket = async () => {
  try {
    // debugger;
    // loading.innerHTML ="<p>LOADING</p>";
    const response = await fetch(basicUrl);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error");
    error.innerHTML = `An error occured`;
  }
};

function displayJackets(jackets) {
  jackets.forEach((jacket) => {
    productSection.innerHTML += `
        <div class=jacket-display">
        <a href="./jacket_specific.html?id=${jacket.id}">
        <p class="display-title">${jacket.name}</p>
        <img src="${jacket.images[0].src}" alt="Image of the ${
      jacket.name
    } jacket" />
        <p class="jacket-price">Price <strong>$${getFirstTwo(
          jacket.prices.price
        )}</strong></p>
        </a>
        </div>`;
  });
}

fetchJacket().then((data) => {
  console.log(data);
  if (jacketSpecific) {
    const jacketId = new URLSearchParams(window.location.search).get("id");
    const jacket = data.find((jacket) => jacket.id == jacketId);
    const jacketImage = jacket.images[0].src;
    console.log(jacketImage);
    jacketSpecific.innerHTML = `
        
    <div class=specific-jacket>
      <div>${jacketId}</div>
      <div>${jacket.name}</div>
      <img src="${jacketImage}" alt="${jacketName}"/>
    </div>
    
    `;
  } else {
    displayJackets(data);
  }
});

console.log(productSection); //tried to see if console log would show what I wanted with the function

// if (jacketSpecific) {
//   fetchJacket().then((data) => {
//     console.log(data);
//   displayJackets(data);
//   }
//   )
//   const jacketId = new URLSearchParams(window.location.search).get("id");
//   const jacket = jackets[jacketId];
//   jacketSpecific.innerHTML = `
//     <div>
//     </div>
//     `;
//   jacketHeader.innerHTML = `
//     ${jacket.name.toUpperCase()}`;
//   addToCartButton.addEventListener("click", function (e) {
//     e.preventDefault();
//     addToCartButton(jacketId);
//   });
// }
