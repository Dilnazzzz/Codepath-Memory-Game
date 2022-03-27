# Codepath-Memory-Game
I created Light and Sound Memory Game as a part of Codepath prework

# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Dilnaz Baltabayeva**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/coal-judicious-cattle

## Required Functionality

The following **required** functionality is complete:

* [ + ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ + ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ + ] Game buttons each light up and play a sound when clicked. 
* [ + ] Computer plays back sequence of clues including sound and visual cue for each button
* [ + ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ + ] User wins the game after guessing a complete pattern
* [ + ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ + ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ + ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ + ] More than 4 functional game buttons
* [ + ] Playback speeds up on each turn
* [ + ] Computer picks a different pattern each time the game is played
* [ + ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ + ] Game button appearance change goes beyond color (e.g. add an image)
* [ + ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ + ] A questions button with the game rules appearing as an alert message
- [ + ] An alert message when a player plays the sequence correctly
- [ + ] An alert message when a player makes mistake, showing the number of mistakes already made 
- [ + ] Sounds played when the player loses or wins the game. 
- [ + ] Feedback page to collect reviews on the game and how to improve it 


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
1. The gif below shows the game interface with a heading (h1 tag), a line of body text (p tag), and five buttons that match the demo app. The "Start" button also toggles between "Start" and "Stop" when clicked.
 
![](https://i.imgur.com/6JDuQ8T.gif)

2. The game buttons each light up and play a sound when clicked. The computer plays back sequence of clues including sound and visual cue for each button. Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 

![](https://i.imgur.com/3ohfFW7.gif)

3. Users win the game after guessing a complete pattern of eight clues. An alert message appears on the top about the win. 

![](https://i.imgur.com/pkP13Uk.gif)

4. Users lose the game afte three incorrect guesses. They are notifies by the alert message appearing on the top of the page. 

![](https://i.imgur.com/UvP2YDQ.gif)

5. I styled HTML page elements (including game buttons, headings and the text) differently than in the tutorial. The buttons do not use a pitch (frequency) but rather animal sounds uploaded to the assets and played when the clue is played or button pressed by a player. I also made 5 functional game buttons.

![](https://i.imgur.com/ZK5eLJK.gif)

6. The playback speeds up on each turn by 50ms where the image is lit up only a small time frame.

![](https://i.imgur.com/AQH3wtI.gif)

7. The computer picks a different pattern each time the game is played since the pattern is an araay of randomly generated integers between 1 (inclusive) and 5 (inclusive).

![](https://i.imgur.com/a4KT82h.gif)

8. Player only loses after 3 mistakes (instead of on the first mistake) and game button chnages to an image when pressed.Finally, the game buttons sounds are more complex (animla sound) corresponding to the animal picture when the button is pressed.

![](https://i.imgur.com/9TFsbfW.gif)

9. Player can see the rules of the game by clicking the questions button. There are also alert messages when a player plays the sequence correctly or makes a mistake. There is also a tracking system which shows the number of mistakes and successful clue combinations 
![](https://i.imgur.com/EElhe0N.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[Stack Overflow (debugging), W3Schools (putting background image), YouTube (JavaScript tutorials)]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

[Firstly, I had difficulties with having an image on buttons. Firstly, I put the picture in HTML on the button and hid it with <img> tag as was suggested. However, I had a hard time making it visible when the game button was pressed. I played around visibility: visible/hidden and hidden: none/block features and tried to change them in onClick on buttons. Nevertheless, I found the solution by putting the image as a background image (background-image) in CSS. Subsequently, since there is a rule for #button2:active, #button2.lit I added the background-image under the background color change, which gave the expected results. It also looks visually more pleasing as otherwise there could have been colored background lit images. Secondly, another difficulty relates to the sound, which requires around two hours to debug. I put the sound URLs in the array similar to frequencies and used indices to refer to them while calling the play() function. I found animal sounds online and cut them to make them 2 seconds long.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

[-	I would add the leaders' board where the best ten performances are listed based on time, accuracy, and number of mistakes. One could make the board international by collecting all statistics in the world. I could use cookies or databases.
-	I would add a timer so that users have 10 seconds to repeat each sequence. If they make a mistake, the timer decreases by two seconds. Once the timer is zero, the player automatically loses.  
-	I would add three game modes based on their difficulty. Easy mode has 3 buttons and 5 sequences, medium - 5 buttons and 7 sequences, hard - 9 buttons and 7 sequences. There would be a flexible mode where players choose the number of buttons and sequence. 
-	There would also be a setting tab where players can change the timer duration, turn on/off sound, and change the style of pictures. 
-	I would also ensure that anyone can comprehend and reproduce the code. Writing comments and docstrings would achieve this. 
-	I would also like the game to be user-friendly in all devices. Thus, I need to make the sizes of the button adjustable for tablets, phones, and large screens. 
-	I would attempt using guitar or piano sounds to train the musical hearing skills of users. One can memorize famous melodies with the help of this memory game. 
-	I would also reduce the amount of code since it has many variables and repetitive code that can be simplified. 
-	To make the game more inclusive, I could add the colorblind mode, making it accessible to more users. 
-	I would improve my rules button to have concise instructions on playing the game. The rules should explain the game's goal, how to play it, and use the setting button.
![image](https://user-images.githubusercontent.com/76237763/160293774-1491f6ef-bf76-492f-aab0-54090c2e70fe.png)
]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Dilnaz Baltabayeva]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
