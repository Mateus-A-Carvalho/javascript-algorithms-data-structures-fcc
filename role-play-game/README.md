# Role Playing Game(RPG)

This is a solution to the [Role Playing Game(RPG) - Website's challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-basic-javascript-by-building-a-role-playing-game/step-1).

## Table of contents

- [Role Playing Game(RPG)](#role-playing-gamerpg)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Main Variables](#main-variables)
      - [The logic of code](#the-logic-of-code)
      - [Explaining functions](#explaining-functions)
        - [``update()``](#update)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

In this practice project, I'd learned fundamental programming concepts in JavaScript by coding my own Role Playing Game learning how to work with arrays, strings, objects, functions, loops, if/else statements, and more.

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Repository](https://github.com/Mateus-A-Carvalho/javascript-algorithms-data-structures-fcc/tree/main/role-play-game)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox

### What I learned

This project doesn't have a lot of chagens about the original code and my own code. There is just some updates to ES6 syntax. So, I go to the explanation now.

#### Main Variables

There is some variables to know before start the project. These wil be helpful in the future.

```javascript
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;  
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
```

- `let xp`: This always starts at 0 and will be added according to the logic implemented;
- ``let currentWeapo``: This is the control to use in inventory;
- ``let fighting``: This will be used to calculate some features like the damage, xp and etc...
- ``let inventory``: The inventory always will starts with "***stick***" weapon because it is the weakest weapon in this game;

The variables doens't needs explanations because they are just elements in HTML

#### The logic of code

The first thing that we come across is threes arrays of objects. The first one has the ``weapons`` data. Each index contains the an objects that have a ``name`` and ``power`` keys. The ``power`` will be used to calculate the damage in the code.

```javascript
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
```

The second array of objects is the ``monsters`` array's. This contains ``name``, ``level`` and ``health`` of monster. 

```javascript
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]
```

The last one array is an object.``locations``. This contains ``name``, ``button text`` array that has the text of each location that will appear as ``textContent`` when ``update()`` is called, ``buttons functions`` that is another array with ***reference*** of function that will used in ``update()`` and the last key is ``text`` that will appear when ``update()`` is called.

#### Explaining functions

At this point, we come across with a few functions. So as not to make it too long, I will talk about it three at time. The firsts ones are ``update()``, ``goTown()``, ``goStore()`` and ``goCave()`` functions.

  ##### ``update()``
  
  ```javascript
  const update = (location) => {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}
  ```
This function takes a parameter called "location" that is an array of objects. In this function, the first thing that happens is set ``monsterStats.style.display`` to ``none``. This makes the container dissapear. Then, we set the buttons ``innerText`` to the respective ``location[´"button text"][index]``. Now, we used almost same syntax to assing the reference of functions to the ``buttons.onclick``, finally assing the ``text.innerHTML`` to the ``location.text``. This will take any place in the game and render the correct informations about it.  


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
