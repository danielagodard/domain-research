// THESE VARIABLES CONTROL HOW MUCH TIME SHOULD A LETTER STAY ON SCREEN AND HOW LONG DOES IT TAKE
// FOR THEM TO FADE OUT
var delayToFade = 1500;
var fadeDuration = 1000;

$(document).ready(function () {

	// EVENT HANDLER FOR KEYPRESS
	$(document).on('keypress', function (e) {
		//DEBUG STUFF
//	    console.log(String.fromCharCode(e.which));
//	    console.log(e.which);
	    
	    // SPACEBAR ADDS EMPTY SPACE
	    if(e.which == 32){
	    	$('#type-here').append('<div class="typed-letter"><i class="my-letter my-c"></i></div>');
	    	$('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
	    	return false;
	    }
	    
	    
	    // CHECK WHICH LETTER WAS PRESSED AND APPEND THE CORRESPONDING HTML TO THE DIV #type-here
	    switch (String.fromCharCode(e.which)) {
	    	case "a":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "b":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "c":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-c"><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "d":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-d"><i></i><i></i><i></i><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false; 
    	       break;
    	    case "e":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-e"><i></i><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "f":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-f"><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "g":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-g"><i></i><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "h":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-h"><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "i":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-i"><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "j":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-j"><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "k":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "l":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-l"><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "m":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "n":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-n"><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "o":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-o"><i></i><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "p":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-p"><i></i><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "q":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-q"><i></i><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "r":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "s":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-s"><i></i><i></i><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "t":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-t"><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "u":
    	       $('#type-here').append('<div class="typed-letter"><i class="my-letter my-u"><i></i><i></i><i></i></i></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "v":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "w":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "x":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "y":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    case "z":
    	       $('#type-here').append('<div class="typed-letter"></div>');
    	       $('#type-here .typed-letter:last').delay(delayToFade).fadeOut(fadeDuration, function() { $(this).remove();} );
    	       return false;
    	       break;
    	    default:
    	    	return false;
    	    	break;
	    }
	    
	    
	});
	
	// BACKSPACE DELETES LAST LETTER
	$(document).on('keydown', function(e) {
	   if (e.keyCode==8) {
	     $('#type-here .typed-letter:last').remove();
	     return false;
	   }
	});

});









