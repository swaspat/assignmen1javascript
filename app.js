//swastik pathania
				
// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

//Arrays for the Buttons
const number1 = ["The turkey", "Mom", "Dad", "The Dog", "My teacher", "The elephant", "The cat"];
const number2 = ["sat on", "ate", "danced with", "saw", "doesnt like", "kissed"];
const number3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const number4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const number5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Initialization of the Button
var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');
var button5 = document.getElementById('btn5');
var button6 = document.getElementById('btn6');
var button7 = document.getElementById('btn7');
var button8 = document.getElementById('btn8');
var lableToPrintStory = document.getElementById('story');

var strVal1 = "";
var strVal2 = "";
var strVal3 = "";
var strVal4 = "";
var strVal5 = "";

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


function returnRandomValue(){
	return Math.floor(Math.random() * 5) + 1;
}
/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}


button1.onclick = function(){
	const index = returnRandomValue();

	strVal1 = number1[index];
	
	document.getElementById("story").innerHTML =  strVal1 + " " + strVal2 +  " " + strVal3 +  " " + strVal4 +  " " + strVal5;
	
	speakNow(strVal1);
}

button2.onclick = function(){
	const index = returnRandomValue();

	strVal2 = number2[index];

	document.getElementById("story").innerHTML =  strVal1 + " " + strVal2 +  " " + strVal3 +  " " + strVal4 +  " " + strVal5;
	
	speakNow(strVal2);
}

button3.onclick = function(){
	const index = returnRandomValue();

	strVal3 = number3[index];
	
	document.getElementById("story").innerHTML =  strVal1 + " " + strVal2 +  " " + strVal3 +  " " + strVal4 +  " " + strVal5;

	speakNow(strVal3);
}

button4.onclick = function(){
	const index = returnRandomValue();

	strVal4 = number4[index];
	
	document.getElementById("story").innerHTML =  strVal1 + " " + strVal2 +  " " + strVal3 +  " " + strVal4 +  " " + strVal5;

	speakNow(strVal4);
}

button5.onclick = function(){
	const index = returnRandomValue();

	strVal5 = number5[index];
	
	document.getElementById("story").innerHTML =  strVal1 + " " + strVal2 +  " " + strVal3 +  " " + strVal4 +  " " + strVal5;

	speakNow(strVal5);
}

button6.onclick = function(){
	const index = returnRandomValue();

	const strVal6 = strVal1 + " " + strVal2 +  " " + strVal3 +  " " + strVal4 +  " " + strVal5;
	
	document.getElementById("story").innerHTML =  strVal6;
	
	speakNow(strVal6);
}

button7.onclick = function(){
	const index1 = returnRandomValue();
	const index2 = returnRandomValue();
	const index3 = returnRandomValue();
	const index4 = returnRandomValue();
	const index5 = returnRandomValue();

	const tempVal1 = number1[index1];
	const tempVal2 = number2[index2];
	const tempVal3 = number3[index3];
	const tempVal4 = number4[index4];
	const tempVal5 = number5[index5];

	const speakVal = tempVal1 + " " + tempVal2 +  " " + tempVal3 +  " " + tempVal4 +  " " + tempVal5;

	document.getElementById("story").innerHTML =  speakVal;

	speakNow(speakVal);
}

button8.onclick = function()
{
	 
	strVal1 = "";
	strVal2 = "";
	strVal3 = "";
	strVal4 = "";
	strVal5 = "";

	document.getElementById("story").innerHTML =  strVal1 + " " + strVal2 +  " " + strVal3 +  " " + strVal4 +  " " + strVal5;

}