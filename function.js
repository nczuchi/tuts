function myFunction() {
	document.write("execute code here <br>")
	// body...
}
myFunction();

function add(p1,p2){
	var k = p1 + p2;
	document.write("p1 + p2 = " + k+ "<br>");
	return k;
}
add(10, 40);

var x = 20;

function k (){
	document.write( "x = "+ x + " is accessed inside a function<br>");

}
k();
document.write( "x = "+ x + " is accessed outside a function<br>");

function k1 (){
	var y = 50;
	document.write( "y = "+ y + " is accessed inside a function<br>");

}
k1();

