"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

//handout excersie 9/19/23
    if (isNaN(miles) || miles <= 0) {
        $("#miles_error").textContent = "Miles driven must be a valid number greater than zero";
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        $("#gallons_error").textContent = "Gallons of gas used must be a valid number greater than zero";
        focusAndSelect("#gallons");
    } else {
        $("#miles_error").textContent = "";
        $("#gallons_error").textContent = "";
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

var clearEntries = () => {
    $("#miles_error").textContent = "*";
    $("#gallons_error").textContent = "*";
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
};

/*Excersies*/
var clearEntryMiles = () => {
    $("#miles").value = "";
};

//Span element
$("#gallons").textContent = "*";

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
    $("#mpg").addEventListener("dblclick",clearEntries); /*DblClick box to clear entires*/
    $("#miles").addEventListener("focusin",clearEntryMiles);/*clear miles if focused*/
    $("#gallons ").addEventListener("focusout",processEntries);/*calculate if focused out*/
});