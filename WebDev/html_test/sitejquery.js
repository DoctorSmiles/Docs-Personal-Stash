$(document).ready(function(){
	// Navbar page links will raise slightly when hovered over.
	$(".navbtn2j").hover(function(){
		$(".navbtn2j").animate({
		up: +=10,
		height: "toggle"
		}, 5000, function(){});
	});
	
	//	Test to see if jQuery is active and linked correctly.
	// $("p").draggable();

	$(".navbtn2j").click(function(){
		$("body").fadeOut(400, function(){
		$("body").fadeIn.load("pers_work.html")};
	});

});