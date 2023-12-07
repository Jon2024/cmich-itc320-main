"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	$("#reservation_form").submit( evt => {
		let isValid = true;
		const nights = $("#nights").val().trim();
		if (nights == "") {
			$("#nights").next().text("This field is required.");
			isValid = false;
		} else if (isNaN(nights)) {
			$("#nights").next().text("Must be numeric.");
			isValid = false;
		} else {
			$("#nights").next().text("");
		}
		$("#nights").val(nights);

		// validate the email entry with a regular expression
		const email = $("#email").val().trim();
		if (email == "") { 
			$("#email").next().text("This field is required.");
			isValid = false;
		} else if ( !emailPattern.test(email) ) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		$("#email").val(email); 

		// validate the phone number
		const phone = $("#phone").val().trim();
		if (phone == "") { 
			$("#phone").next().text("This field is required.");
			isValid = false; 
		} else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);
		
		//prevent to submit the reservation if false
		if (!isValid) {
			evt.preventDefault();				
		}
		});
}); // end ready