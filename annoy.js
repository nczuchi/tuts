// var ans = prompt("are we there yet?");
// while(ans!== "yes" && ans!=="yeah") {
// 	var ans = prompt("are we there yet?")
// }

// alert("we made it");

var ans = prompt("are we there yet?");
while(ans.indexOf("yes") === -1) {
	var ans = prompt("are we there yet?")
}
alert("we made it");
