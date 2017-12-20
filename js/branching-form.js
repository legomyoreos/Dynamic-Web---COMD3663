function feedback() {
	//Get the value from the range slider.
	var num = parseInt(document.getElementById("rating").value)
	//Declare msg variable as string.
	var msg = ""
	switch (num) {
	case 1:
	msg = "Oh no! ☹ We're sorry your experience with us completely sucked. Contact us <a href='feedback.html'>here</a> and tell us what we could do better!";
	break;
	
	case 2:
	msg = "Ah, we didn't expect this! Please contact us <a href='feedback.html'>here</a> and tell us what we could do better!";
	break;
	
	case 3:
	msg = "Thank you! We appreciate your feedback. Please contact us <a href='feedback.html'>here</a> to tell us what we could do better!";
	break;
	
	case 4:
	msg = "Great! We're glad you enjoyed your time with us. Thanks for the feedback!";
	break;
	
	case 5:
	msg = "Awesome! We didn't suck after all! Follow us on <a href='https://www.instagram.com/bestbuy' target='_blank'>Instagram</a> and share your experience with your friends!";
	break;
	
	default:
	msg = "Please enter a number value (for example: 1, not one) between 1 and 5.";
	}
	//Find and populate result paragraph.
	document.getElementById("response").innerHTML = msg;
}