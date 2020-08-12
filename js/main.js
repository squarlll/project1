$(document).ready(function(){
	$('.slider__images-item img').on('click', function(){
		var clickedImage = $(this).attr('src');
		$('.slider__main-image img').attr('src', clickedImage);
		$('.slider__main-image source').attr('srcset', clickedImage);
	});
});