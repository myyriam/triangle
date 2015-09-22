$(document).ready(function(){
	
function typeOfTriangle(sideA,sideB,sideC){
	if (sideC<=sideA+sideB && sideA<=sideB+sideC && sideB<=sideA+sideC){
		if (sideA===sideB && sideB === sideC){
			return "Equilateral";
		}else{
		if (sideA===sideB || sideB===sideC || sideA===sideC){
				return "Isosceles";
		}
		else {
			return "Scalene";
			} 
		}
}else {
		return "It is not a triangle";
		}
}

$("form").on("submit", function (event){
	event.preventDefault();

	var sideA = parseInt($("input#side-a").val());
	var sideB = parseInt($("input#side-b").val());
	var sideC = parseInt($("input#side-c").val());
		console.log (sideA+sideB+sideC);
	var result = typeOfTriangle(sideA,sideB,sideC);

$("span#result").text(result);
})
})