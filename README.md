Memory Game from The Odin Project

Create with ReacJs, this app is a simply memory game that keeps track of what cards have been clicked and updates the current and high scores.

This project taught me a great deal about react States and the useEffect function within a functional component environment. 
My biggeest struggle was getting name of the card that was clicked from the card component to the board game component. I solved this thankst to an article from Pluralsight, detailing that you cannot pass props/states to a parent from a child. But what you can do instead is pass in a callback function that gives the data needed. Once I got this solved the other pieces fell into place, such as updating the current and high score and sending that to the header. 
