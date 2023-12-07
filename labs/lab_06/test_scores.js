"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

// Use blog.js / mpg.js for example!!!
const addScore = () => {
	//Works, but errors don't appear!!!
	//save the user inputs and push into existing arrays
	let name = document.getElementById("name").value;
	let score = document.getElementById("score").value;
	if (name != "" && score != "") {
        if (score >= 0 && score <= 100) {
            names[names.length] = name;
            $("#name").nextElementSibling.textContent = "";
            scores[scores.length] = score;
            $("#score").nextElementSibling.textContent = "";
            $("#name").focus();
        } else {
            $("#score").nextElementSibling.textContent = "Score must be between 0 and 100";
            $("#score").focus();
        }
    }
    if (score == "") {
        $("#score").nextElementSibling.textContent = "Enter a score between 0 and 100";
        $("#score").value = "";
        $("#score").focus();
    } else {
        $("#score").nextElementSibling.textContent = "";
    }
    if (name == "") {
        $("#name").nextElementSibling.textContent = "Please enter a name";
        $("#name").value = "";
        $("#name").focus();
    } else {
        $("#name").nextElementSibling.textContent = "";
    }
}

const displayResults = () => {
	//COMPLETE
	//Find average score in array
	var total = 0;
	var highscore = 0;
	var highname = "";
	for(let i in scores) {
		total += parseInt(scores[i]);
		//find highest score, name
		if(scores[i] > highscore){
			highscore = scores[i];
			highname = names[i];
		}
	}
	let average = (total / scores.length).toFixed(1);


	//display average score
	let div = document.getElementById("results");
	div.innerHTML = "";
	div.innerHTML += "<h2> Results </h2>";
	div.innerHTML += "Average score: " + average;
	div.innerHTML += "<br>High Score = " + highname + " with a score of " + highscore;
} 

const displayScores = () => {
	//DONE
	//display name and score array, maybe add them into one array.
	let div = document.getElementById("scores");
	div.innerHTML = "";
	div.innerHTML += "<h2>Scores</h2>";
	for(let i in names){
		div.innerHTML += "<br>" + names[i] + "&emsp;&emsp;" + scores[i];
	} 
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});