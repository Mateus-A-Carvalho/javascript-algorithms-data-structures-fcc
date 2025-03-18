# Calouries Counter

This is a solution to the [Calouries Counter - Freecodecamp.org](https://www.freecodecamp.org/). Project name challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Calouries Counter](#calouries-counter)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Code explanation](#code-explanation)
    - [Main Variables](#main-variables)
    - [`cleanInputString()` function](#cleaninputstring-function)
    - [`isInvalidInput(str)` function](#isinvalidinputstr-function)
    - [``addEntry()`` function](#addentry-function)
    - [`calculateCalories(e)` function](#calculatecaloriese-function)
    - [`getCaloriesFromInputs()` function](#getcaloriesfrominputs-function)
    - [`clearForm()` Function](#clearform-function)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties

### Code explanation

I use this area to explain every function and feature of this code. I believe that teach is the best way to learn. Hope you enjoy!!!

### Main Variables

Like almost javascript code, it starts with a set of variables to store some important datas to this code. You can see these variables in code bellow:

```javascript
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;
```

### `cleanInputString()` function

Starting with the first function that we have, this function have the purpose to clean a string passed as parameters. To do this, the most suitable is ***RegEx***. RegEx means *Regular Expressions* and is a resource in various programming languages that is used to match and find some expressions. 

```javascript
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}
```

In this code, we assing a Regex to the const `regex`. This regex matches/find the patterns that have a plus or minus operator and spaces or any breaklines in every string. After it, there is an ***flag*** that says to find in all text. After it, we return this string replacing the `regex` to an empty string.


### `isInvalidInput(str)` function

This functions works similarly to the `cleanInputString()` function. The difference between them is that `isInvalidInput` function return `String.prototype.matchd` that matches a string against a regex if it is a string, returning `null` if there is no matches or an array with matches if it works. This function will be usefull in another function soon.

```javascript
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
```
### ``addEntry()`` function

This function has the purpose lead with an entry that will be added. First of all, there is three constants to store some valeus. The first is `targetInputContainer` that has the input container. In this value we can we ***template strings*** to dynamically select the element with `input-container` class inside the `entryDropdown` element. In the second lind, we declare `entryNumber` and assing it an array with all `inputs` with attribute `type="text"`, at the final adding ***1*** for the index and the length has the same number and value. Remember, in Javascript, index os array always start at ***0***. In the next line, we creater another variable called `HTMLString` to store a HTML structure using ***template strings***.

```javascript
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}
```
### `calculateCalories(e)` function

This function calculates the total of calories. First of all, this function takes an `e` parameters thats is a convension meaning ***event***. Then, we use a known method called `preventDefault()`. This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. The code that shows the function being invoked without parameters is bellow:

```javascript
clearButton.addEventListener("click", clearForm);
addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
```

 The `e` parameter is passed on the invoking of this function. This is what we call of "Callback Pattern". It is an important programming pattern in Javascript that allows to pass an argument to a function that will be executed later.


After we prevent the `form` element to submit the data, we assing `isError` control variable to `false`. This will be useful to check if there is any error later. After it we create a set of variables with `const` to store node-lists of elements with `querySelectorAll` method. 

Then, there will be another set of variables that will store the result of returning of `getCaloriesFromInputs()` function. After that, we check if there is an error. We create a `if/else` and if `isError` test `true` we quit the function. 

After it, we create three variables, `consumedCalories`, `remaingCalories` and `surplusOrDeficit`. `consumedCaloires` will sum all calories stored. `remainingCalories` will sum `consumedCalories` plus `exerciseCalories` and decrease to `budgetCalories`. `surpluesOrDeficit` will check a condiction with a `ternary operator`. This operator will check if `remaingingCalories` is less than `0`. If it is, return a string with `'Surplus'`. If not, return a string with `'Deficit'`. 

Then, we set `innerHTML` of `output` with a `template strings` to add a few elements dinamically in `HTML`. After added the the elements, we remove the class `hide` of `output`.


```javascript
function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
  const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
  const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
  const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
  const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");

  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  if (isError) {
    return;
  }

  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

  output.classList.remove('hide');
}
```

### `getCaloriesFromInputs()` function

This function calculates the total of calories. First of all, this function takes an `list` parameters. After it, we set a `calories` to zero because our sum always have to starts at zero. 

Then, there is a `for...of` loop. This statement iterates throught values of iterable object(***in this case, it is an array***). Inside this loop, we set two variables, `currVal` and `invalideInputMatch`, both calling the functions `cleanInputString(item.value)` and `isInvalidInput(currVal)`, respectvely.


After it, there is an `if/else` statement. If `isInvalidInput` test true, we will send an alert with `alert` with "**Invalid Input: `${invalidInputMatch[0]}`**". Then, we set `isErro` to `true`. After it, we return `null` to this `if/else` block.

Out of this block, still within `for...of` block, we parse `calories` value with `Number(currVal)` and finally return `calories`.` 

```javascript
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}
```

### `clearForm()` Function

This function clears the form. First of all, we create a variable `inputContainers` and assign it the returning of `Array.from(document.querySelectorAll('.input-container'))` method. This method creates an array of any **iterable** object or with **length** property. 

After that, there is a `for...of` loop that takes the element `container` and clear it, setting an empty string to the `innerHTML` property.

Finally, we set `budgetNumberInput.value` and `output.innerText` to an empty string. Also, we hide the output with `output.classList.add('hide')`


```javascript
const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  for (const container of inputContainers) {
    container.innerHTML = '';
  }

  budgetNumberInput.value = '';
  output.innerText = '';
  output.classList.add('hide');
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
