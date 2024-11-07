const bodyEl = document.querySelector(`body`)
const containerEl = document.createElement(`div`);
const btnInvertedFalse = document.createElement(`button`);
const btnInvertedTrue = document.createElement(`button`);

bodyEl.appendChild(containerEl);
containerEl.appendChild(btnInvertedFalse);
containerEl.appendChild(btnInvertedTrue)

let character = "▲";
const invertedCharacter = "▼";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    character = invertedCharacter
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