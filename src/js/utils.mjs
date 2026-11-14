export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });

  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export function renderListWithTemplate(templateFn, parentElement, list) {
  parentElement.innerHTML = list.map(templateFn).join("");
}

export async function loadHeaderFooter() {
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");

  if (header) {
    const headerResponse = await fetch("../partials/header.html");
    header.innerHTML = await headerResponse.text();
  }

  if (footer) {
    const footerResponse = await fetch("../partials/footer.html");
    footer.innerHTML = await footerResponse.text();
  }
}