# Rock Paper Scissors

A simple Rock Paper Scissors game built with JavaScript as part of **The Odin Project** curriculum.
<https://www.theodinproject.com/lessons/foundations-rock-paper-scissors>

## About the Project

This project is a console-based Rock Paper Scissors game where a human player competes against the computer for five rounds.

The project focuses on practicing JavaScript fundamentals, including:

* Functions
* Parameters and arguments
* Variables and scope
* Conditional statements
* `Math.random()`
* `prompt()`
* `console.log()`
* Function return values
* String methods
* Basic game logic
* Tracking scores

## Live Demo
<https://osmanamin0448.github.io/rock-paper-scissors-v2/>

## How the Game Works

1. The computer randomly chooses **Rock**, **Paper**, or **Scissors**.
2. The player enters their choice using `prompt()`.
3. The game compares the player's choice with the computer's choice.
4. The winner of each round is announced in the browser console.
5. The winner's score is incremented.
6. The game plays **5 rounds**.
7. At the end of the five rounds, the final winner is announced.

## Project Structure

```text
rock-paper-scissors/
├── index.html
├── script.js
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone <git@github.com:osmanamin0448/rock-paper-scissors-v2.git>
```

### 2. Open the project

Navigate into the project directory:

```bash
cd rock-paper-scissors-v2
```

### 3. Run the game

Open `index.html` in your browser.

The game uses the browser's developer console to display the game results.

Open the console using:

```text
Right-click → Inspect → Console
```

## Game Rules

* Rock beats Scissors
* Scissors beats Paper
* Paper beats Rock
* The same choice results in a draw

## What I Learned

Through this project, I practiced writing JavaScript functions and organizing program logic into smaller reusable pieces.

I also learned how to:

* Generate random values using `Math.random()`
* Get user input with `prompt()`
* Pass values into functions using parameters
* Return values from functions
* Track changing values using variables
* Use conditional logic to determine a winner
* Use function scope to organize game state
* Build a multi-round game using functions

## Future Improvements

Possible improvements for a future version include:

* Add a graphical user interface (GUI)
* Add buttons instead of using `prompt()`
* Display scores on the webpage
* Add a reset/restart button
* Improve input validation
* Add animations and styling

## Acknowledgements

This project was completed as part of **The Odin Project** foundation curriculum.
