var ebooks = [
	{title: "Beginners guide to freedom ", author:" Jason ", readingStatus: false },
	{title: "Begin deathly harrows", author:"cason Jacobs ", readingStatus: true },
	{title: "inners", author:"PJason", readingStatus: false }
] ;
for (var i = 0; i < ebooks.length; i++) {
	
	 var book = "'"+ ebooks[i].title+"'" +"by " + ebooks[i].author;

	 	if (ebooks[i].readingStatus) {
	 		document.write("Already read " + book+ " <br>");
	 	} else {
	 		"Needs to read " + book+ " <br>";
	 	}

}

// RegExp
var regName = /izuchi/;
var search = "how about izuchi, is he ready?";
var found = regName.test(search);
// alert(found);

// function as an object
var t = function (r,y){
	return(r * y)
};
alert(t(12,4));