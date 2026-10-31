import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let cart = getLocalStorage("so-cart") || [];

  if (!Array.isArray(cart)) {
    cart = [cart];
  }

  cart.push(product);
  setLocalStorage("so-cart", cart);
}

async function addToCartHandler(e) {
  const productId = e.currentTarget.dataset.id;
  const product = await dataSource.findProductById(productId);

  if (product) {
    addProductToCart(product);
  }
}

document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
