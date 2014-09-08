$(document).ready(function(){

	$('.arrow').click(function(){
		$('#tiles').animate({left: "-=360"}, 600, 'easeOutCirc');
		$('#apps').animate({left: "-=360"}, 600, 'easeOutCirc');
	});
});