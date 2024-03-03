const closeModalButton = document.getElementById("modal-close");
const openModalButton = document.getElementById("modal-open");
const userCard = document.querySelector(".user-card");
const modalContent = document.getElementById("modal-content");
openModalButton.addEventListener("click", () => {
  userCard.classList.add("blur");
  modalContent.classList.add("show");
});
closeModalButton.addEventListener("click", () => {
    userCard.classList.remove("blur");
    modalContent.classList.remove("show");
});
