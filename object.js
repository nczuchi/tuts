// var car = new Object();
// car.driver = "rusty";
// car.speed = "205mph";
// car.date = 2017;
// car.details = function() {
// 		return(car.speed +" " + car.driver);
// }
// alert(car.details());

var car = {
	driver: "rusty",
	speed: "205mph",
	date: 2017,
	details: function() {
			return(this.speed +" " + this.driver + "Date Manufactured " + date);
	}
};
	// delete car.date;
	// alert(car.driver);
	// alert(car.details());
	// alert(car.date);
var myCar ={
	model: "Benz",
	color:"Red",
	drive: "4WD"
}
var k = "";
for(var z in myCar){
	k = k + myCar[z] + " ";
}
alert(k);