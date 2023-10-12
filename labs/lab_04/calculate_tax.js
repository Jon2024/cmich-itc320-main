"use strict";
//Look at mpg.js for examples.

const $ = selector => document.querySelector(selector);

const processEntries = () => {
	//create subtotal, tax_rate, sale_tax, and total.
	const subtotal = parseFloat($("#subtotal").value);
	const tax_rate = parseFloat($("#tax_rate").value);


}

//Clear entries
var clearEntries = () => {
	$("#subtotal").value = "";
	$("#tax_rate").value = "";
	$("#sale_tax").textContent = "";
	$("#total").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntries);
	$("#clear").addEventListener("click", clearEntries); //When button is pushed, clears all.
});