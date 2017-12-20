var font = 20;
var line = 1.5;
var paragraph = document.getElementsByTagName('p');
var button = document.getElementsByTagName("button");
var toggleButton = document.getElementsByClassName("toggle_button");

function decreaseFontSize() {
	font--;
	for (var i = 0; i < paragraph.length; i++) {
		paragraph[i].style.fontSize = font+'px';
		if (font <= 20) {
			paragraph[i].style.lineHeight = 1.5;
		}
	}
}

function increaseFontSize() {
	font++;
	for (var i = 0; i < paragraph.length; i++) {
		paragraph[i].style.fontSize = font+'px';
		if (font > 20) {
			paragraph[i].style.lineHeight = 1.7;
		}
	}
}

function resetFontSize() {
	font = 20;
	line = 1.5;
	for (var i = 0; i < paragraph.length; i++) {
		paragraph[i].style.fontSize = font+'px';
		paragraph[i].style.lineHeight = line;
	}
}

function schoolBusYellow() {
	document.getElementById("project_name").style.color = "#ffc826";
	document.getElementById("all_projects").style.color = "#ffc826";
	for (var i = 0; i < button.length; i++) { 
		button[i].style.backgroundColor = "#ffc826";
		button[i].style.color = "#000";
	}

	for(var j = 0; j < toggleButton.length; j++) {
		toggleButton[j].style.backgroundColor = "#ffc826";
		toggleButton[j].style.color = "#000";
	}
}

function millennialPink() {
	document.getElementById("project_name").style.color = "#FFB6C1";
	document.getElementById("all_projects").style.color = "#FFB6C1";
	for (var i = 0; i < button.length; i++) { 
		button[i].style.backgroundColor = "#FFB6C1";
		button[i].style.color = "#fff";
	}

	for(var j = 0; j < toggleButton.length; j++) {
		toggleButton[j].style.backgroundColor = "#FFB6C1";
		toggleButton[j].style.color = "#fff";
	}
}

function azureBlue() {
	document.getElementById("project_name").style.color = "#0066FF";
	document.getElementById("all_projects").style.color = "#0066FF";
	for (var i = 0; i < button.length; i++) { 
		button[i].style.backgroundColor = "#0066FF";
		button[i].style.color = "#fff";
	}

	for(var j = 0; j < toggleButton.length; j++) {
		toggleButton[j].style.backgroundColor = "#0066FF";
		toggleButton[j].style.color = "#fff";
	}
}

function carmineRed() {
	document.getElementById("project_name").style.color = "#FF0038";
	document.getElementById("all_projects").style.color = "#FF0038";
	for (var i = 0; i < button.length; i++) { 
		button[i].style.backgroundColor = "#FF0038";
		button[i].style.color = "#fff";
	}

	for(var j = 0; j < toggleButton.length; j++) {
		toggleButton[j].style.backgroundColor = "#FF0038";
		toggleButton[j].style.color = "#fff";
	}
}

function sapGreen() {
	document.getElementById("project_name").style.color = "#507d2a";
	document.getElementById("all_projects").style.color = "#507d2a";
	for (var i = 0; i < button.length; i++) { 
		button[i].style.backgroundColor = "#507d2a";
		button[i].style.color = "#fff";
	}

	for(var j = 0; j < toggleButton.length; j++) {
		toggleButton[j].style.backgroundColor = "#507d2a";
		toggleButton[j].style.color = "#fff";
	}
}

function moreMHistory() {
	var div = document.getElementById("mHistory_text");
	if (div.style.display === "none") {
		div.style.display = "block";
	} else {
		div.style.display = "none";
	}
}

function lessMHistory() {
	document.getElementById("mHistory_text").style.display = "none";
}

function moreEffects() {
	var div = document.getElementById("effects_text");
	if (div.style.display === "none") {
		div.style.display = "block";
	} else {
		div.style.display = "none";
	}
}

function lessEffects() {
	document.getElementById("effects_text").style.display = "none";
}

function moreAftermath() {
	var div = document.getElementById("aftermath_text");
	if (div.style.display === "none") {
		div.style.display = "block";
	} else {
		div.style.display = "none";
	}
}

function lessAftermath() {
	document.getElementById("aftermath_text").style.display = "none";
}

function moreEnvironment() {
	var div = document.getElementById("environment_text");
	if (div.style.display === "none") {
		div.style.display = "block";
	} else {
		div.style.display = "none";
	}
}

function lessEnvironment() {
	document.getElementById("environment_text").style.display = "none";
}