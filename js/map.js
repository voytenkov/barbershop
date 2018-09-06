var mapLink = document.querySelector(".button-contacts-map");
var modalMap = document.querySelector(".modal-map");
var modalMapClose = modalMap.querySelector(".modal-close");
   
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-view");
});
modalMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-view");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("modal-view")) {
      modalMap.classList.remove("modal-view");
    }
  }
});