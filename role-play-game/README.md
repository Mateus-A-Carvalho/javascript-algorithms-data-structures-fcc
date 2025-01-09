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
        - [``goTown()``, ``goStore()`` and ``goCave()`` funtions](#gotown-gostore-and-gocave-funtions)
        - [``buyHealth()`` function](#buyhealth-function)
        - [``buyWeapon()`` function](#buyweapon-function)
        - [``sellWeapon()`` function](#sellweapon-function)
        - [``fightSlime()``, ``figthBeast()`` and ``fightDragon()`` functions](#fightslime-figthbeast-and-fightdragon-functions)
        - [``goFight()`` function](#gofight-function)
        - [``attack()`` function](#attack-function)
        - [``getMonsterAttackValue()`` function](#getmonsterattackvalue-function)
        - [``isMonsterHit()`` function](#ismonsterhit-function)
        - [dodge() function](#dodge-function)
        - [defeatMonster() function](#defeatmonster-function)
        - [lose(), winGame() and restart() functions](#lose-wingame-and-restart-functions)
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

  ##### ``goTown()``, ``goStore()`` and ``goCave()`` funtions

Theses three functions basically take a parameters that is the ``locations`` array and work with this data.

```javascript
function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}
```
  ##### ``buyHealth()`` function

This functions leads with functionality of buying health. First of all, we need to check if ``gold`` is greater or equal than **10**(health's price). If it is, we subtract **10** to ``gold``, add **10** to ``health``, than set ``goldText.innerText`` and ``healthText.innerText`` to ``gold`` and ``health``, respectivelly. If this condition is false, we print a message alerting that there is no enough gold.

```javascript
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = `You do not have enough gold to buy health.`;
  }
}
```

##### ``buyWeapon()`` function

Now, I will explain this function that implement the funcionality of buy weapons. The first thing that happens is an ``if/else`` statement cheking if `curentWeapon` is less than ``weapons.length - 1``. Remember that ``currentWeapon`` was already declared in the beginning of code with **0**.  Also remember that ``weapons`` is an *array* that have *objects* with ``name`` and ``power`` of weapons in the game. So, checking if ``currentWeapon`` is less than ``weapons`` prevent the user to buy some weapon that doesn't exist. After it, there is another condition to check if ``gold`` is greater or equal **30**(***The price to buy another weapon***). If it is, ``currentWeapon`` is incremented by **1** and ``goldText.innerText`` is assigned by ``gold``. The next step is create a new variable with `let` called ``newWeapon`` and assign it to the ``weapons[curentWeapon].name``(*the increment in the currentWeapon makes it go to the next index in the weapons array*). Then, we set the text.innerText with a message using template literals. Then, we add this new weapon to the `inventory` array with ``inventory.push(newWeapon)`` method and add to the text other text that tell us which weapon we have in the ``inventory``. If this condition tests false, the ``text.innerText`` prints the message that we don't have enough gold. 

Going to the outermost condition(``if(currentWeapon < weapons.length - 1)``), if this condition is false, then we will print in ``text.innerText`` a message that tell us that we already have the powerful weapon in game. After it, the ``button2.innetText`` are assign to "***Sell weapon for 15 gold***". Finally, ``button2.onclick`` is assigned to ``sellWeapon`` reference.

```javascript
function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = `You now have a ${newWeapon}.`;
      inventory.push(newWeapon);
      text.innerText += ` In your inventory you have: ${inventory}`;
    } else {
      text.innerText = `You do not have enough gold to buy a weapon.`;
    }
  } else {
    text.innerText = `You already have the most powerful weapon!`;
    button2.innerText = `Sell weapon for 15 gold`;
    button2.onclick = sellWeapon;
  }
}
```

##### ``sellWeapon()`` function

In this function, I will explain how each line works to sell a weapon of your ``inventory``. The first step is check if ``inventory.length`` is greater than ***1***. This prevents that the function sell a weapon that doesn't exist. Inside this ``if/else`` statement, we assign ***+15*** to the ``gold`` and this current value to the ``goldText.innerText`` value. After, we take out the first element of ``inventory`` array with ``inventory.shift()``. After that, the ``text.innerText`` receive two messages. If the condition is false, the ``else`` block code assings in the ``text.innerText`` a message saying preventing to don't sell your only weapon.

```javascript
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = `You sold a ${currentWeapon}. In your inventory you have: ${inventory}`;
  } else {
    text.innerText = `Don't sell your only weapon!`;
  }
}
```

##### ``fightSlime()``, ``figthBeast()`` and ``fightDragon()`` functions

The next functions are simply. They assign a corresponding value to ``fighting`` variable and call goFight() function. The number assigned in ``fighting`` will be usefull to set the name and health of monsters.

```javascript
function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}
```

##### ``goFight()`` function

First of all, this function calls ``update(locations[3])`` function with it's corresponding parameter. Then, set monsterHealth with value ``monsters[fighting].health`` to show the health of monsters. The next line makes the monster status appear, using ``monsterStatus.style.display = "block"``. Then, we set ``monsterName.innerText`` to ``monster[fighting].name`` and ``monsterHealthText.innerText`` to monsterHealth.

```javascript
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}
```

##### ``attack()`` function

Now is time to take more time to explain this complex and detailed function. The first thing that happens is set a text saying that monter attacked and which weapon you used, in ``text.innetText``. After it, our health is decreased with ``health -= getMonsterAttackValue(monsters[fighting].level);``. The ``getMonsterAttackValue()`` will be explain later. Now we have a conditional statement that checks if ``isMonsterHit()`` evaluates truthy. Is it is, ``monsterHealth`` is decreased using the following expression:

> ``monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;``

This expression decreases the ``monsterHealth`` with compound subtraction operator, taking the weapon power key in ``weapons.power`` and add a random number multiplying by ``xp`` and adding **1** to result. Adding one makes the value of ``Math.floor()`` take the number deleted. 

After it, if this condition test false, ``text.innerText`` say "You missed". 

Now, we set ``healthText.innerText`` to ``health``. ``monsterHealth.innerText`` to ``monsterHealth``. After it, there is another ``if/else`` statement that checks if ``health`` is less or equal 0. If it is, ``lose()`` function is called. If isn't and the monsterHealth is less or equal 0, there will be another ``if`` statement inside that checks if **fighting** is strict equal to **2**. This means that we are facing the *dragon*, the last and powerful monster of game. If it checks true, ``win()`` function is called. If ins't, ``defeatMonster()`` function is called.

After all, there is another ``if/else`` statement that checks the expression bellow:

> ``if (Math.random() <= .1 && inventory.length !== 1)``

This expression check if the number generated by ``Math.random()`` is less or equal to **1** and if ``inventory.length`` os strictly different to 1(***meaning that inventory have more than 1 weapons***). If it is, ``text.innerText`` are assigned by compound assigment operator with a text saying that the weapons broke and then currentWeapon is decremented.

```javascript
function attack() {
  text.innerText = `The ${monsters[fighting].name} attacks. You attack it with your ${weapons[currentWeapon].name}`;
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += ` You missed.`;
  }

  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += ` Your ${inventory.pop()} breaks.`;
    currentWeapon--;
  }
}
```

##### ``getMonsterAttackValue()`` function

Now, this function has the purpose to calculate monster's attack value. Firt of all, we start declaring a cosnstant called ``hit`` that receives the following expression:

> `const hit = (level * 5) - (Math.floor(Math.random() * xp));`

This expression takews `level` parameter and multiples for **5** the subtract it of `Math.floor(Math.random() * xp)`. At the final, this function uses a ***ternary operator*** to return if hit is greater than ***0***. If it is, return the `hit`. If isn't, return ***0***.

```javascript
function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  return hit > 0 ? hit : 0;
}
```
##### ``isMonsterHit()`` function

This function uses ``short-circuit evaluation``. This evaluation uses ``&&(AND)`` or ``||(OR)`` logic operators. Using the ``||(OR)`` makes the evaluation return the ***FIRST TRUTHY VALUE*** or the **LAST FALSY VALUE(*if all operands are falsy*)**. The value of returning is used in `attack()` function to decides if monster attacks or not.

```javascript
function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}
```

##### dodge() function 

This function has only purpose to set the ``text.innerText`` to "`You dodge the attack from the ${monsters[fighting].name}`", using template strings.

##### defeatMonster() function

Now, It's time to explain this function. At the beginning, we assign `Math.floor(monsters[fighting].level * 6.7))` to `gold` with **compound assigment operator** and `monster[fighting].level` to `xp` with same operator. Then, we set these variables(`gold` and `xp`) to the ``goldText.innerText`` and ``xpText.innerText`` respectivelly. At the final, the ``update(locations[4])`` is invoked.

```javascript
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}
```

##### lose(), winGame() and restart() functions

The first two functions only take the `locations` array and render all data that must be appear. The second function, ``restart()`` works when we lose or win. We set `xp` to **0**, `health` to **100**, `gold` to **50** and `currentWeapon` to **0**. Then, `inventory` array now will have only "stick" weapon. Now, we assing `goldText.innerText` to `gold`, `healthText.innerText` to `health` and `xpText.innerText` to `xp`. At the final, we call `goTown()` function.

```javascript
function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
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
