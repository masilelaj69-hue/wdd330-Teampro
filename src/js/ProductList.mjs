import { renderListWithTemplate } from "./utils.mjs";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const products = await this.dataSource.getData();
    this.renderList(products);
  }

  renderList(list) {
    renderListWithTemplate(
      this.renderItem,
      this.listElement,
      list,
    );
  }

  renderItem(item) {
    const imagePath = item.Image.replace("../images/", "/images/");

    return `
      <li class="product-card">
        <a href="/product_pages/index.html?product=${item.Id}">
          <img src="${imagePath}" alt="${item.Name}" />
          <h3>${item.Name}</h3>
          <p class="product-card__price">$${item.FinalPrice.toFixed(2)}</p>
        </a>
      </li>
    `;
  }
}