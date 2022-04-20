const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.

const handleCorrectGuess = (letter) => {
    // if letter === character:
      // add the letter to the div to display it
      // disable the button for the letter
    const get_letters = document.querySelectorAll(`.letter-box ${letter}`);
    // display the content of the div, make it ${letter}
    get_letters.innerHTML = `${letter}`;
    console.log(get_letters);
  }



//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    // add an event handler to handle clicking on a letter button
    function checkButtons(){
      const letter = button.innerHTML;
       if (word.includes(letter)) {
        handleCorrectGuess(letter);
        }
        else {
          handleWrongGuess();
        }
        disableLetterButton(button);
    }
    button.addEventListener("click", checkButtons);
      // checkButtons
    // console.log(evt.target);


    // YOUR CODE HERE
    // get innerHTML of the button to be compared to letter-boxes of the div
    // when a button is clicked, letter button character of the button against the letter-box letter of the div
    // if ()
    // if letter not in letter-boxes, call handleWrongGuess
    // if letter is in letter-boxes, call HandleCorrectGuess
    // call disableLetterButton

    // event listener would be click
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();

