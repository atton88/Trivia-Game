#Crazy Cat Person Game


Created a psychic game where the user tries to guess a random letter in 9 guesses.

# Link to deployed site


[Website](https://atton88.github.io/unit-4-game/)

[GitHub Profile](https://github.com/atton88)

# Images

![About Me](\assets\images\readme1.PNG)

# technology used

- HTML
- CSS
- JavaScript
- Bootstrap CDN
- jQuery


# code snippets

Game function
```
// On-click function, adds value to score, checks for win and loss conditions
$(".container").on("click", ".isButton", function() {
    // console.log(this.value);
    score += parseInt(this.value);
    $("#scoreText").text(score);

    // Lose condition, updates losses and restarts
    if (score > goal) {
        alert("You became a crazy cat person. You lose.");
        losses++;
        $("#lossesText").text(losses);
        startGame();
    }
    //Win condition, updates wins and restarts
    else if (score === goal) {
        alert("You're weird, but at least you're not crazy. You win!");
        wins++;
        $("#winsText").text(wins);
        startGame();
    }
});
```

Animation for pictures
```
/* Animation for pics hover */
.isButton:hover {
    animation-name: picAnimation;
    animation-duration: 5s;
}

@keyframes picAnimation {
    0% {
        transform: translateY(-10%);
    }
    100% {
        transform: translateY(-10%);
    }
}
```

# Learning points
- Learned to use the on click functions
- Learned to store values into elements
- Learned to animate elements with CSS
- Learned to implement JavaScript

# Author 
[Andrew Ton](https://github.com/atton88)