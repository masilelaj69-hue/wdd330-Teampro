const baseURL = "https://www.backcountry.com/";

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${category}.json`;
  }

  async getData() {
    try {
      const response = await fetch(this.path);

      if (!response.ok) {
        throw new Error("Could not retrieve product data");
      }

      return await response.json();
    } catch (error) {
      console.error("Error loading products:", error);
      return [];
    }
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((product) => product.Id === id);
  }
}