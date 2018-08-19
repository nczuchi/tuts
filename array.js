var myColors = ["blue", "brown","white"];
document.write(myColors + "<br>");

myColors.push("red");
document.write(myColors[3] + "<br>");

var myFood = ["rice", "beans", "meat", "bread"];

for (var i = 0; i < myFood.length; i++) {
	document.write(myFood[i]+ "<br>");
}

var myDrinks =[

			{beverage:"Milo", year:"1985"},
			{mineral:"pepsi", year:"1456"},
			{water:"h20", year:"1569"}


];
for (var k = 0; k < myDrinks.length; k++) {
	var md = "";
	for(var mydrink in myDrinks[k] ){
		md = md + myDrinks[k][mydrink];
	}
	document.write(md + "<br>");
}