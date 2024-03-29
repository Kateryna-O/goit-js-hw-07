const amountInput = document.getElementById("amountInput");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = parseInt(amountInput.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesContainer.appendChild(box);
    }
    amountInput.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
