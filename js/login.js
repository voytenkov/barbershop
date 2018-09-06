var loginLink = document.querySelector(".login");
var modalLogin = document.querySelector(".modal-login");
var modalLoginForm = modalLogin.querySelector("form");
var modalLoginClose = modalLogin.querySelector(".modal-close");
var login = modalLogin.querySelector("[name=login]");
var password = modalLogin.querySelector("[name=password]");
var storageLogin = localStorage.getItem("login");
loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.toggle("modal-view");
  if (storageLogin) {
    login.value = storageLogin;
    password.focus();
  } else {
    login.focus();
  }
});
modalLoginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-view");
});
modalLoginForm.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains("modal-view")) {
      modalLogin.classList.remove("modal-view");
    }
  }
});