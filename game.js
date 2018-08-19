var game = prompt ("guess a number");
if (game <= 10 ) {
	alert("you are too low");
} 
else if (game > 10 && game <16 ) {
	alert("you a bit low almost there");
} 
else if (Number(game === 16)) {
	alert("correct");
}
else if (game >16 && game <= 22 ) {
	alert("you are a bit up almost there ");
}  
else {
	alert("you are too high come low");
} 
 

var count = 4;
while( count <= 10){
	document.write( "your number is " + count+ "<br>")
	count++;
}