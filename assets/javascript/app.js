// Andrew Ton
// Assignment 5 - Trivia Game
// app.js

// start, timer starts 120sec
// when time is zero, end the game - correct, incorrect, unanswered
//        $("#title-area").html($("<h2>").html(questions.curQuestion.q));

// Check that DOM is loaded
$(document).ready(function() {

    // Create global variables

    //questions is an array of arrays with the [question, answer, array of answers]
    var questions = [
        {q:"How many planets are in the solar system?", a:"8", z:["8", "9", "10", "11"]},
        {q:"What is the second biggest planet in our Solar System", a:"Saturn", z:["Jupiter", "Saturn", "Neptune", "Earth"]},
        {q:"What is the hottest planet in our Solar System?", a:"Venus", z:["Mercury", "Venus", "Earth", "Jupiter"]},
        // [],
        {q:"What is the funniest planet name?", a:"Uranus", z:["Jupiter", "Venus", "Uranus", "Kepler-22B"]},
        {q:"What is the closest star to Earth besides the sun?", a:"Alpha Centauri", z:["Sirius", "Epsilon", "Orion", "Alpha Centauri"]},

        // [],
        // [],
        // [],
        // []
        ];
        
        // for score
        var correct = 0;
        var incorrect = 0;
        // for timer
        var count = 0;
        var intervalId;


    function startTimer() {
        
        // appends timer text
        $("#timerDiv").empty();
        $("#timerDiv").append($("<h2>").text("Time remaining:"));
        $("#timerDiv").append($("<h1 id='timerText'>").text("_____"));

        // clears interval and starts timer
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000) // every second
    }

    function decrement() {
        count--;
        console.log(count);
        $("#timerText").text(count + " secs");

        // timer tet color changes to red with 10 secs left
        if (count <= 10) {
            $("#timerText").attr("style", "color:red"); 
        };
        if (count === 0) {
            $("#timerText").text(0);
            results();
        }
    }

    function generateQuestions() {
        // hide start button during game
        $("#startButton").css("display", "none")

        // append questions
        for (var i = 0; i < questions.length; i++) {
            $("#questions").append("<hr>" + "<h3>" + questions[i].q + "</h>");

            // create temp form
            var tempForm = $("<form>").attr("id", "form"+i);

            //create new loop to go through the answers array in Object question and create the radio buttons
            for (j = 0; j < questions[i].z.length; j++) {
                var tempInput = $("<input>"); //temp div to hold new div

                // add attributes to input (radio, name, value)
                tempInput.attr("type", "radio");
                tempInput.attr("name", "radio"+i);  
                tempInput.attr("data-answer", questions[i].z[j]);
                
                //append the tempDiv and text to form
                tempForm.append(tempInput);
                tempForm.append(tempInput.attr("data-answer"));
            }
            
            // append the tempForm to page
            $("#questions").append(tempForm);
        }
        $("#questions").append(tempForm);
        
        // create submit button
        createButton("Submit");
    }

    // On-click function, adds value to score, checks for win and loss conditions
    $("#startButton").on("click", startGame); 

    // On-click function to submit and call results page
    $(".container").on("click", "#submitButton", results);

    // On-click function to restart the game after results page
    $(".container").on("click", "#restartButton", startGame);

    // Reset game function
    function startGame() {
        correct = 0;
        incorrect = 0;
        count = 15; // 2 mins NEED TO CHANGE
        generateQuestions();
        startTimer();
    };

    // clears the screen and appends results
    function results() {
        clearInterval(intervalId);
        
        // Unhide start button
        $("#startButton").css("display", "inline")

        //check for correct and incorrect answers
        for (var i = 0; i < questions.length; i++) {
            console.log($("input[name=radio"+i+"]:checked").attr("data-answer"));
            console.log(questions[i].a);
            if (questions[i].a === $("input[name=radio"+i+"]:checked").attr("data-answer")) {
                correct++;
            }
            else if ($("input[name=radio"+i+"]:checked").attr("data-answer")){
                incorrect++;
            }
            console.log($("input[name=radio"+i+"]:checked"));
                }

        // clear appended elements
        $("#timerDiv").empty();
        $("#questions").empty();

        // append results
        $("#timerDiv").append($("<h3>").text("Trivia Complete"));
        $("#timerDiv").append($("<p>").text("Correct Answers: " + correct));
        $("#timerDiv").append($("<p>").text("Incorrect Answers: " + incorrect));
        console.log(questions.length - (correct + incorrect));
        $("#timerDiv").append($("<p>").text("Unanswered: " + (questions.length - (correct + incorrect))));
    }

    // Creates submit button and restart button at the bottom of the page
    function createButton(str) {
        var newButton  = $("<button>").attr("id", str.toLowerCase() + "Button");
        newButton.text(str);
        newButton.attr("class", "btn btn-info btn-lg btn-block text-dark shadow font-weight-bold");
        newButton.css("margin-top", "30px");
        console.log(newButton);
        $("#questions").append(newButton);
    }
});