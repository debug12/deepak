$(document).ready(function(){
	var commands = [];
	var alreadyUp = false;
	var length = 0;
	var hidden = 0;
	var total = 3;
	var secret1 = false;
	var secret2 = false;
	var secret3 = false;
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
			var command = $(this).val().toLowerCase();
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
			else if(command == "projects" || command == "hacks"){
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
				$(this).attr('placeholder', 'type help for usage');
			}
			else if(command == "help"){
				$('.clearMe').empty();
				commands.push(command);
				$(this).val("");
				$('.clearMe').append("<li>Use ls to display the pages</li><li>Type in those pages to navigate</li><li>Try and find all the hidden commands!</li>")
				$('.clearMe').append("<li>Hint: Check the Jumbotron. </li>");
			}
			else if(command == "music"){
				$('.clearMe').empty();
				commands.push(command);
				$(this).val("");
				window.open('http://www.youtube.com/dpakkumar3216');
			}
			else if(command == "exit"){
				$('.bash-outer').fadeOut('slow');
			}
			else if(command == "try and read this"){
				commands.push(command);
				$('.clearMe').empty();
				$(this).val("");
				if(!secret1){
					secret1 = true;
					hidden++;
					$('.clearMe').append("<p>Congrats! You've found "+hidden+" secrets!</p>");
					$('.clearMe').append("<p>You have "+(total-hidden)+" remaining.</p>");
					if(hidden == total){
						$('.clearMe').empty();
						$('.clearMe').append("<p>Here's my number. (248) 231-3575</p>");
						$('.clearMe').append("<p> Let's build something awesome. </p>");
					}
				} else{
					$('.clearMe').append("<p>You've already found this one. </p>");
				}
			}
			else if(command == "i see that you are catching on"){
				$('.clearMe').empty();
				commands.push(command);
				$(this).val("");
				if(!secret2){
					secret2 = true;
					hidden++;
					$('.clearMe').append("<p>Congrats! You've found "+hidden+" secrets!</p>");
					$('.clearMe').append("<p>You have "+(total-hidden)+" remaining.</p>");
					if(hidden == total){
						$('.clearMe').empty();
						$('.clearMe').append("<p>Here's my number. (248) 231-3575</p>");
						$('.clearMe').append("<p> Let's build something awesome. </p>");
					}
				} else{
					$('.clearMe').append("<p>You've already found this one. </p>");
				}
			}
			else if(command == "secretz"){
				$('.clearMe').empty();
				commands.push(command);
				$(this).val("");
				$('.clearMe').append("<li>try and read this</li>");
				$('.clearMe').append('<li>i see that you are catching on</li>');
				$('.clearMe').append('<li>project:noob</li>');
			}
			else if(command.split(" ")[0] == "google"){
				var array = command.split(" ");
				if(array[1] == undefined){
					$('.clearMe').empty();
					$(this).val("");
				} else{
					$('.clearMe').empty();
					$(this).val("");
					var link = "http://lmgtfy.com/?q="+array[1];
					window.open(link);
				}
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
			var command = $(this).val().toLowerCase();
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
			else if(command == 'e' || command == 'ex' || command == 'exi' || command == 'exit'){
				$(this).val('exit');
			}
		}
	})
})