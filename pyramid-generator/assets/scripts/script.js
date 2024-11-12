const bodyEl = document.querySelector(`body`)
const containerEl = document.querySelector(`#container`)
const paragraphEl = document.querySelector(`#result`)
const invertedFalseBtnEl = document.querySelector(`#inverted-false-btn`)
const invertedTrueBtnEl = document.querySelector(`#inverted-true-btn`)

let character = "▲";
const count = 10;
const rows = [];
let inverted = false;
let result = ""




const padRow = (rowNumber, rowCount) => {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Function returns text content of buttons;
const invertedOrNot = id => id === "inverted-false-btn" ? invertedFalseBtnEl.textContent : invertedTrueBtnEl.textContent;

// Function build rows array;
const buildingCharArr = () => {
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }
}

// Function return the result printed in console;
const printResult = () => {
  for (const row of rows) {
    result = result + "\n" + row;
  }

  return paragraphEl.innerHTML = result;
}


invertedFalseBtnEl.addEventListener(`click`, () => {
  buildingCharArr();
  printResult();
  invertedOrNot(invertedFalseBtnEl.id)
});

invertedTrueBtnEl.addEventListener(`click`, () => {
  buildingCharArr();
  printResult();
  invertedOrNot(invertedTrueBtnEl.id)
});
