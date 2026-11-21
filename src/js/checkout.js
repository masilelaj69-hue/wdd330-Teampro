import CheckoutProcess from "./CheckoutProcess.mjs";

const checkout = new CheckoutProcess();

const form = document.querySelector("#checkout-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = form.checkValidity();

  form.reportValidity();

  if (!isValid) {
    return;
  }

  const formData = Object.fromEntries(
    new FormData(form).entries()
  );

  checkout.checkout(formData);
});