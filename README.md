# SEIR-Memory-Project
### Goals of the Projecct
1. Memory game with a loss condition, that being a maximum move count. Difficulty settings to change max move count.
2. Feedback through sound effects and animations.
3. Cool effects when winning so that players actually want to win. maybe randomize the effects.
4. Nice looking background. Should have more time to stylize since the game it self is not complicated.
### Wireframe
![image](https://github.com/sapalombo21/SEIR-Memory-Project/blob/main/wireframe.png)
### Pseudocode
Initiliaze properties such as urls to images, number of card pairs, the grid, number of moves, number of matches, max move count.
Function to preload images depending on number of pairs.
Initialization function that shuffles the grid with the loaded pairs. 
Open card function that reveals the card and stores its value in memory for the second time you click on a card.
Check if the cards match. If they do, keep the cards revealed and allow the player to continue. If not, hide both cards.
Win condition is checked anytime a pair is matched. Lose condition always tracked anytime a click is made.
#### STATE
The number of matched pairs will need to be tracked through out the game.
