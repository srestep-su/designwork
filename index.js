$(document).ready(function(){

	var totalSlides = 5
	var currentSlide = 1

	$(".right").click(function(){
		if(currentSlide<totalSlides){


		$(".sliderbox").animate({left:"-=400"}, "600")
		currentSlide = currentSlide+1 

	}


	})//end right click

	$(".left").click(function(){
		if(currentSlide>1){
		$(".sliderbox").animate({left:"+=400"}, "600")
		currentSlide = currentSlide-1

	}


	})//end left click





})//end doc ready