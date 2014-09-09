$(document).ready(function(){

	$('.arrow').click(function(){
		$('#tiles').animate({left: "-=360"}, 500, 'easeOutCirc');
		$('#apps').animate({left: "-=360"}, 500, 'easeOutCirc');
	});
	$('#backbutton').click(function(){
		$('#tiles').animate({left: "+=360"}, 500, 'easeOutCirc');
		$('#apps').animate({left: "+=360"}, 500, 'easeOutCirc');
	});
});