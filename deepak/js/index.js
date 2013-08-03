$(document).ready(function(){
	var commands = [];
	var alreadyUp = false;
	var length = 0;
	$(function(){
		$('#typed').typed({
			strings: ["Hi, I'm Deepak.", "I like to think, code, and sing.", "Lets get in touch."],
			typeSpeed: 50,
			backDelay: 400,
			callback: function(){
				$('#navigation-text').show();
				$('.commands').show();
				$('.blackme').focus();
				$('.bash-outer').css('height: 100px')
				$('#hideMe').fadeIn('slow');
			}
		})
	})
	$('.blackme').keypress(function(e){
		alreadyUp = false;
		var keycode = (e.keyCode ? e.keyCode : e.which);
		if(keycode == '13'){
			//now program all the codes
			var command = $(this).val();
			if(command == "blog"){
				$('.clearMe').empty();
				commands.push(command);
				window.open('blog.html');
				$(this).val("");
			}
			else if(command == "ls" || command == "l"){
				commands.push(command);
				$('.clearMe').empty();
				$(this).val("");
				$(this).attr('placeholder', 'type the page you want to see');
				$('.clearMe').append("<li>blog</li><li>projects</li><li>music</li>")
			}
			else if(command == "projects"){
				$('.clearMe').empty();
				$(this).val("");
				commands.push(command);
				window.open('projects.html');
			}
			else if(command == "clear"){
				$('.clearMe').empty();
				$(this).val("");
				commands.push(command);
			}
			else if(command == ""){
				$(this).val("");
				$(this).attr('placeholder', 'type the page you want to see');
			}
			else if(command == "help"){
				$('.clearMe').empty();
				commands.push(command);
				$(this).val("");
				$('.clearMe').append("<li>Use ls to display the pages</li><li>Type in those pages to navigate</li><li>Try and find all the hidden commands!</li>")
			}
			else if(command == "music"){
				$('.clearMe').empty();
				commands.push(command);
				$(this).val("");
				window.open('http://www.youtube.com/dpakkumar3216');
			}
			else{
				$('.clearMe').empty();
				commands.push(command);
				$(this).val("");
				$('.clearMe').append('<p>Not a recognized command.</p>');
			}
		}
	})
	$('.blackme').keydown(function(e){
		if(e.keyCode == 38){
			if(alreadyUp){
				--length;
				$('.blackme').val(commands[length]);
			} else{
				length = commands.length - 1;
				$('.blackme').val(commands[length]);
				alreadyUp = true;
			}
			//code for the commands goes here
			return false;
		}
		else if(e.keyCode == 40){
			if(alreadyUp){
				++length;
				$('.blackme').val(commands[length]);
			}
			return false;
		}
		else if(e.keycode == 9 || e.which == 9){
			e.preventDefault();
			var command = $(this).val();
			if(command == 'b' || command == 'bl' || command == 'blo' || command == 'blog'){
				$(this).val('blog');
			}
			else if(command == 'p' || command == 'pr' || command == 'pro' || command == 'proj' || command == 'proje' || command == 'projec' || command == 'project'){
				$(this).val('projects');
			}
			else if(command == 'c' || command == 'cl' || command == 'cle' || command == 'clea' || command == 'clear'){
				$(this).val('clear');
			}
			else if(command == 'h' || command == 'he' || command == 'hel' || command == 'help'){
				$(this).val('help');
			}
			else if(command == 'm' || command == 'mu' || command == 'mus' || command == 'musi' || command == 'music'){
				$(this).val('music');
			}
		}
	})
})