import ExternalServices from "./ExternalServices.mjs";
import { getLocalStorage, alertMessage } from "./utils.mjs";

export default class CheckoutProcess {
  constructor() {
    this.externalServices = new ExternalServices();
  }

  async checkout(formData) {
    try {
      const cart = getLocalStorage("so-cart");

      if (!cart || cart.length === 0) {
        alertMessage("Your cart is empty.");
        return;
      }

      const order = {
        ...formData,
        items: cart,
      };

      await this.externalServices.checkout(order);

      localStorage.removeItem("so-cart");

      window.location.href = "./success.html";

    } catch (err) {
      console.error("Checkout error:", err);

      const message =
        err.message?.message ||
        err.message ||
        "Unable to process your order. Please try again.";

      alertMessage(message);
    }
  }
}