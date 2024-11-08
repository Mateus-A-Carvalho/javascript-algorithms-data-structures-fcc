const bodyEl = document.querySelector(`body`)
const containerEl = document.querySelector(`#container`)
const paragraphEl = document.querySelector(`#result`)
const invertedFalseBtnEl = document.querySelector(`#inverted-false-btn`)
const invertedTrueBtnEl = document.querySelector(`#inverted-true-btn`)

let character = "▲";
const invertedCharacter = "▼";
const count = 10;
const rows = [];
let inverted = false;

// Events;



const padRow = (rowNumber, rowCount) => {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Function returns text content of buttons;
const invertedOrNot = id => id === "inverted-false-btn" ? invertedFalseBtnEl.textContent : invertedTrueBtnEl.textContent;


for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result)

invertedFalseBtnEl.addEventListener(`click`, invertedOrNot(invertedFalseBtnEl.id));
invertedTrueBtnEl.addEventListener(`click`, invertedOrNot(invertedTrueBtnEl.id));
