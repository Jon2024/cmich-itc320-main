"use strict";
const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntry = () => {

	//create income tax input
	const income = parseInt($("#income").value);

	//create alert if income tax is less than 0.
	if(income <= 0){
		alert("Income is less than zero, please put in a number greater than zero.");
		$("#income").focus();
		$("#income").select();
	}
	else {
		calculateTax(income);
	}
}

//Make calculateTax to calculate Income Tax
var calculateTax = (income) => {
	//make total
	let total;

	//total = take Over number(has one decimal place to the left) + % of input number - exceed number
	//if block $0 < income < $9875
	if(income > 0 && income <= 9875){
		total = (0 + (income * 0.1)) - 0;
		$("#tax").value = total.toFixed(2);
	}
	//$9875 < income < $40125
	else if(income > 9875 && income <= 40125){
		total = (987.50 + (income * 0.12)) - 9875;
		$("#tax").value = total.toFixed(2);
	}
	//$40125 < income < $85525
	else if(income > 40125 && income <= 85525){
		total = (4617.50 + (income * 0.22)) - 40125;
		$("#tax").value = total.toFixed(2);
	}
	// $85525 < income < $163300
	else if(income > 85525 && income <= 163300){
		total = (14605.50 + (income * 0.24)) - 85525;
		$("#tax").value = total.toFixed(2);
	}
	// $163300 < income < $207350
	else if(income > 163300 && income <= 207350){
		total = (33271.50 + (income * 0.32)) - 163300;
		$("#tax").value = total.toFixed(2);
	}
	// $207350 < income < $518400
	else if(income > 207350 && income <= 518400){
		total = (47367.50 + (income * 0.35)) - 207350;
		$("#tax").value = total.toFixed(2);
	}
	// $518400 < income
	else if(income > 518400){
		total = (156235.00 + (income * 0.37)) - 518400;
		$("#tax").value = total.toFixed(2);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#income").focus();
	$("#calculate").addEventListener("click", processEntry);
});