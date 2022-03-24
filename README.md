# SEIR-Memory-Project
## LINK TO GAME
![game](https://sapalombo21.github.io/SEIR-Memory-Project/)
### Goals of the Projecct
1. Memory game with a loss condition, that being a maximum move count. Difficulty settings to change max move count.
2. Feedback through sound effects and animations.
3. Cool effects when winning so that players actually want to win. maybe randomize the effects.
4. Nice looking background. Should have more time to stylize since the game it self is not complicated.
### Wireframe
![image](https://github.com/sapalombo21/SEIR-Memory-Project/blob/main/wireframe.png)
### Pseudocode
This game will use an array of an object called Card. Card will contain various properties such as the image, the value, and might also include the click handler built in. At first, the gameboard will be hardcoded with one size in mind, and then shuffled using an array shuffling algorithm. Memory variable in the global scope to track which cards have been clicked on. Matched pairs variable to track the game state. The click event will check if there is a card in memory first, then check if the card in memory has the same image as the card that was just clicked on. If they are the same value, they will stay flipped and the amount of matched cards increased by one. Every click will increase the move count. Win condition when the # of matched pairs is equal to the amount of sets. Lose condition when max move count is reached.
#### STATE
The number of matched pairs will need to be tracked through out the game.
