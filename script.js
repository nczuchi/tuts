//var firstName = prompt("what is your firstname?");
//var lastName = prompt("what is your lastname?");
//var age = prompt("how old are you?");
//var days = age*365;
//alert("you are " + firstName +" "+lastName);
//alert("you have been alive for " +days+ " days");

var age = prompt("what is your age?");

if (age<0) {
	alert("Age is negative");
}
 else if(age==21)
{
	alert("happy 21st birthday");
}
 else if(age%2==!0)
{
    alert("your age is odd");
}
 else if (age % Math.sqrt(age) == 0) {
  alert("Perfect square!");
}
 else{
	alert("you are " +age+ " years old");
}