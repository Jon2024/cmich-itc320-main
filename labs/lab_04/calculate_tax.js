"use strict";
//Look at mpg.js for examples.

const $ = selector => document.querySelector(selector);

const processEntries = () => {
	//create subtotal, tax_rate, sale_tax, and total.
	const subtotal = parseFloat($("#subtotal").value);
	const tax_rate = parseFloat($("#tax_rate").value);
	
	//make alert if inputs is not invalid
	if(subtotal < 0 || subtotal > 10000){
		alert("Subtotal must be > 0 and < 10000");
		$("#subtotal").focus();
	}
	if(tax_rate < 0 || tax_rate > 12){
		alert("Tax Rate must be > 0 and < 12");
		$("#tax_rate").focus();
	}

	//calculate the sale tax (7.5 --> 0.075)
	let tax  = (subtotal * (tax_rate * 0.01));
	$("#sale_tax").value = tax.toFixed(2);

	//calculate total (add all)
	$("#total").value = (subtotal + tax).toFixed(2); //Values are adding to decimal like this 1 + 0.01 = 10.01 MUST FIX! 10/10 update fixed!
}

//Clear entries
var clearEntries = () => {
	$("#subtotal").value = "";
	$("#tax_rate").value = "";
	$("#sale_tax").value = "";
	$("#total").value = "";
	$("#subtotal").select();
}

var clearSubtotal = () => {
	$("#subtotal").value = "";
}

var clearTaxRate = () => {
	$("#tax_rate").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#subtotal").select();
	$("#calculate").addEventListener("click", processEntries);
	$("#clear").addEventListener("click", clearEntries); //When button is pushed, clears all.
	$("#subtotal").addEventListener("click", clearSubtotal); //When the box is clicked, removes text
	$("#tax_rate").addEventListener("click", clearTaxRate); //When the box is clicked, removes text
});