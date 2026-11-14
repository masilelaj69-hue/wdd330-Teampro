import ProductData from "./ProductData.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const category = new URLSearchParams(window.location.search).get("category");

const dataSource = new ProductData();

const productList = document.querySelector(".product-list");

async function displayProducts() {
  try {
    const products = await dataSource.getData(category);

    productList.innerHTML = products.map(product => `
      <li class="product-card">
        <a href="../product_pages/index.html?product=${product.Id}">
          <img
            src="${product.Image}"
            alt="${product.Name}"
            loading="lazy"
          >
          <h3>${product.Name}</h3>
          <p class="product-card__price">
            $${product.FinalPrice}
          </p>
        </a>
      </li>
    `).join("");

  } catch (error) {
    console.error("Product loading error:", error);
    productList.innerHTML = "<li>Unable to load products.</li>";
  }
}

loadHeaderFooter();
displayProducts();

