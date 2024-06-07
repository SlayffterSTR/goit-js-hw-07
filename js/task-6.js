function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  const allDivs = divBoxes.querySelectorAll("#boxes .box");
  allDivs.forEach((div) => {
    div.remove();
  });
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    inputForm.value = "";
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    newDiv.classList.add("box");

    divBoxes.append(newDiv);
  }
}

const divBoxes = document.querySelector("#boxes");
const inputForm = document.querySelector('input[type="number"]');
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

createButton.addEventListener("click", () => {
  destroyBoxes();
  const inputValue = inputForm.value.trim();
  if (inputValue > 100 || inputValue < 1) {
    return;
  }
  createBoxes(inputValue);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
