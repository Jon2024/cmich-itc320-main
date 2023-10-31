"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const addScore = () => {

}

const displayResults = () => {
	let sum = 0;
	//Add everything in Array together
	for (var i = 0; i < scores.length; i++){
		sum += scores[i];
	}
	$("#sum").value = (sum / scores.length);

	document.write(`<h2>Results</h2>`);
	document.write(`<p>Average score = ${sum}</p>`);

	//Find the highest score in the array and print name
	let highest_name = 0;
	let highest_score = "";
	
	highest_name = 
} 

const displayScores = () => {

}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});