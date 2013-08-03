$(document).ready(function(){
	$(function(){
		$('#typed').typed({
			strings: ["Hi, I'm Deepak.", "I like to think, code, and sing.", "Lets get in touch."],
			typeSpeed: 50,
			backDelay: 400,
			callback: function(){
				$('.bash-outer').css('height: 100px')
				$('#hideMe').fadeIn('slow');
			}
		})
	})
})