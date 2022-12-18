import { jackets } from "./allJackets";

const jacketsInCart = document.querySelector(".jackets-in-cart");

const cart = [];

if (sessionStorage.getItem("cart")) {
  const getCart = JSON(sessionStorage.getItem("cart"));
}

function addToCart(productID) {
  cart.push(productID);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  console.log(window.sessionStorage.getItem("cart"));
}

function getCart() {
  const newCart = sessionStorage.getItem("cart");
  return newCart;
}

function removeFromCart(jacketId) {
  const updatedCart = JSON.parse(getcart());
  const jacketIndex = updatedCart.findIndex((id) => id === jacketId);
  updatedCart.splice(jacketIndex, 1);
  sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  displaycart();
}

function displaycart() {
  if (jacketsInCart) {
    const updatedCart = JSON.parse(getCart());
    if (updatedCart != undefined) {
      jacketsInCart.innerHTML = "";
      updatedCart.forEach((jacketId) => {
        const jacket = jackets[jacketId];
        jacketsInCart.innerHTML += `
                <div class=jacket-in-cart">
                <dic class="jacket-in-cart-image">
                <img src="${jacket.image}" alt="${jacket.name}">
                </div>
                <div class="jacket-in-cart-info">
                <div class="jacket-in-cart-info-row1">
                <h3 class="jacket-in-cart-title">${jacket.name}</h3>
                <p class="jacket-in-cart-description">${jacket.description}</p>
              </div>
              <div class="jacket-in-cart-info-row2">
                <p class="jacket-in-cart-price">$ ${jacket.price}</p>
                <button class="jacket-in-cart-button cta remove-from-cart" id="${jacketId}">Remove</button>
              </div>
            </div>
          </div>`;
      });
    }
    const romoveFromCartButton =
      document.getElementsByClassName("remove-from-cart");
    Array.from(removeFromCartButton).forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target.id);
        removeFromCart(e.target.id);
      });
    });
  }
}

displaycart();

export { addToCart, cart };
