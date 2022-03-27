
// global constants
const cluePauseTime = 333; //how long to pause in between clues

//Global Variables
var pattern = [1, 2, 3, 4, 5, 1, 2, 3];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.1; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 2000; //how long to hold each clue's light/sound
var mistakes = 0;
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function randomArray(length, max) {
  return Array.apply(null, Array(length)).map(function () {
    return Math.floor(Math.random() * max) + 1;
  });
}

function startGame() {
  //initialize game variables
  pattern = randomArray(8, 5);
  console.log(pattern);
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  //swap the Start and Stop buttons
  document.querySelector("#progress").innerHTML = 0;
  document.querySelector("#mistakes").innerHTML = 0;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

const sounds = [
  new Audio(
    "https://cdn.glitch.global/9f6c1cbc-87fa-4713-8a82-9d52c6880ad8/Horse-Cry-Hard-D-www%20(mp3cut.net).mp3?v=1648156807706"
  ),
  new Audio(
    "https://cdn.glitch.global/9f6c1cbc-87fa-4713-8a82-9d52c6880ad8/dogshoort.mp3?v=1648156436726"
  ),
  new Audio(
    "https://cdn.glitch.global/9f6c1cbc-87fa-4713-8a82-9d52c6880ad8/shoortcat.mp3?v=1648156393569"
  ),
  new Audio(
    "https://cdn.glitch.global/9f6c1cbc-87fa-4713-8a82-9d52c6880ad8/Cow-Mooing-C-www.fesliyanstudios.com.mp3?v=1648153890138"
  ),
  new Audio(
    "https://cdn.glitch.global/9f6c1cbc-87fa-4713-8a82-9d52c6880ad8/Sheep-Lamb-Bah-B-www.fesliyanstudios.com.mp3?v=1648153887867"
  ),
];

const gamesounds = [
  new Audio(
    "https://cdn.glitch.global/9f6c1cbc-87fa-4713-8a82-9d52c6880ad8/game-lose.mp3?v=1648322746173"
  ),
  new Audio(
    "https://cdn.glitch.global/9f6c1cbc-87fa-4713-8a82-9d52c6880ad8/game-win-sound-effect.mp3?v=1648322961429"
  ),
];

function playTone(btn, len) {
  sounds[btn - 1].play();
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    sounds[btn - 1].play();
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var g = context.createGain();

g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  clueHoldTime = 2000;
  nextClueWaitTime -= 50;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 300; //how long to hold each clue's light/sound
  }
}

function askQuestion() {
  alert(
    "Welcome to the game! To start the game click the start button and listen to the first sound played. Then repeat the pattern yourself. If you made the corrrect choice, the first clue will be played again with a new clue. Keep repeating the pattern until you get the sequence of eight clues correctly. Remember you can only make 3 mistakes. If you make a mistake, the sequence will be played again. To stop the game click the stop button any time during the game. Good luck!"
  );
}

function loseGame() {
  document.querySelector("#progress").innerHTML = 0;
  document.querySelector("#mistakes").innerHTML = 0;
  stopGame();
  gamesounds[0].play();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  gamesounds[1].play();
  alert("Game Over. You won.");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        alert("Good job! Next clue playing. Listen carefully.");
        progress++;
        document.querySelector("#progress").innerHTML = progress;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    mistakes += 1;
    document.querySelector("#mistakes").innerHTML = mistakes;
    alert(
      "You have made " +
        mistakes +
        " mistakes. Remember you can make only 3 mistakes before you lose. The sequence is playing again. Listen carefully."
    );
    console.log("mistakes:" + mistakes);
    if (mistakes == 3) {
      loseGame();
    } else {
      playClueSequence();
    }

  }
}
