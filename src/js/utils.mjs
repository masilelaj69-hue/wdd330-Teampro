// Select an element from the DOM
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// Get data from localStorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Save data to localStorage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Get URL parameters
export function getParam(param) {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
}

// Display alert messages
export function alertMessage(message, scroll = true) {
  const main = document.querySelector("main");

  if (!main) return;

  const oldAlert = main.querySelector(".alert-message");

  if (oldAlert) {
    oldAlert.remove();
  }

  const alert = document.createElement("section");
  alert.classList.add("alert-message");
  alert.setAttribute("role", "alert");
  alert.textContent = message;

  main.prepend(alert);

  if (scroll) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
