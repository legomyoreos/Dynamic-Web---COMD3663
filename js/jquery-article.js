$( document ).ready(function() {
    
	$("#expandAllText").click(function() {
		$("#mHistory_text, #effects_text, #aftermath_text, #environment_text").slideDown();
	});

	$("#hideAllText").click(function() {
		$("#mHistory_text, #effects_text, #aftermath_text, #environment_text").slideUp();
	});

	$("#showAllImages").click(function() {
		$("img").fadeToggle();
	});

	$("img").click(function() {
		$(this).animate({
			maxWidth: "100%"
		}, "slow");
	});

	$("#mHistory_heading").click(function() {
		$("#mHistory_text").slideToggle();
	});

	$("#effects_heading").click(function() {
		$("#effects_text").slideToggle();
	});

	$("#aftermath_heading").click(function() {
		$("#aftermath_text").slideToggle();
	});

	$("#environment_heading").click(function() {
		$("#environment_text").slideToggle();
	});

	// #mHistory_text, #effects_text, #aftermath_text, #environment_text



});