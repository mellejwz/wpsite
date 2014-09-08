$(document).ready(function(){

	$('.arrow').click(function(){
		$('#tiles').animate({left: "-=360"}, 600, 'easeOutCirc');
		$('#display').animate({scrollTop:"0"}, 500, 'easeOutCirc');
		$('#apps').animate({left: "-=360"}, 600, 'easeOutCirc');
	});
	$('#backbutton').click(function(){
		$('#tiles').animate({left: "+=360"}, 600, 'easeOutCirc');
		$('#display').animate({scrollTop:"0"}, 500, 'easeOutCirc');
		$('#apps').animate({left: "+=360"}, 600, 'easeOutCirc');
	});
});