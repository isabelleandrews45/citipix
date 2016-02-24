
var input;

$('#submit-btn').on('click', function(event){
	event.preventDefault();
	//changes background color to appropriate city pic
	input = $('#city-type').val();
	input = input.toLowerCase();
	if (input === 'nyc' || input === 'new york' || input === 'new york city'){
		$('body').css('background-image','url(images/nyc.jpg)');
	}
	else if(input ==='austin'){
		$('body').css('background-image','url(images/austin.jpg)');
	} else if(input ==='la' || input === 'los angeles'){
		$('body').css('background-image', 'url(images/la.jpg)');
	} else if(input ==='sf' || input ==='san francisco'){
		$('body').css('background-image', 'url(images/sf.jpg)');
	} else if(input ==='sydney'){
		$('body').css('background-image', 'url(images/sydney.jpg)');
	}
});