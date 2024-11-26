const bodyEl = document.querySelector(`body`)
const containerEl = document.querySelector(`#container`)
const paragraphEl = document.querySelector(`#result`)
const invertedFalseBtnEl = document.querySelector(`#inverted-false-btn`)
const invertedTrueBtnEl = document.querySelector(`#inverted-true-btn`)

const count = 10;
let inverted = false;
const rows = [];
let result = ""


const padRow = (rowNumber, rowCount) => {
  let character = inverted ? invertedTrueBtnEl.textContent : invertedFalseBtnEl.textContent;
  const nonBreakSpaces = `&nbsp`;
  return nonBreakSpaces.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + nonBreakSpaces.repeat(rowCount - rowNumber);
}

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
    result = `${result}\n${row}`;
  }

  return paragraphEl.innerHTML = `<pre>${result}</pre>`;
}


invertedFalseBtnEl.addEventListener(`click`, () => {
  inverted = false;
  paragraphEl.innerHTML = ``;
  rows.length = 0;
  result = ``;
  buildingCharArr();
  printResult();
});

invertedTrueBtnEl.addEventListener(`click`, () => {
  inverted = true;
  paragraphEl.innerHTML = ``;
  rows.length = 0;
  result = ``;
  buildingCharArr();
  printResult();
});
