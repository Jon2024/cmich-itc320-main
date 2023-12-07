"use strict";

$(document).ready( () => {
	// display data from session storage
	$("#email").text(localStorage.email);
	$("#phone").text(localStorage.phone);
	$("#zip").text(localStorage.zip);
	$("#dob").text(localStorage.dob);

	
	$("#back").click( () => {
		history.back();
	}); // end of click()
	
}); // end of ready()