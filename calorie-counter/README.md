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

In this code, we assing a Regex to the const `regex`. This regex matches/find the patterns that have a plus or minus operator and spaces or any breaklines in every string. After it, there is an ***flag*** that says to find in all text. After it

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
