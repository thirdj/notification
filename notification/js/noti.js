
$(function(){

	$('.note-bar').slideDown(300);

	$('#hidebar').click(function(){
		$('.note-bar').slideUp(300, function(){
			$('.open-button').slideDown(300);
		});
		return false;
	});

	$('#showbar').click(function(){
		$('.open-button').slideUp(300, function(){
			$('.note-bar').slideDown(300);
		});
		return false;
	});

});
