const popUpBox = document.querySelector(".popup");
const popUpButton = document.querySelector(".popup-button");

window.onload = () => (popUpBox.style.display = "block");

popUpButton.addEventListener("click", () => {
  popUpBox.style.display = "none";
});
