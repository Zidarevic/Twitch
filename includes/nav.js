//filter nav
var main = function() {
	
  $('#openFilter').click(function() {
    $('.filterNav').animate({
    	
      left: "0px"
    }, 200);

    $('body').animate({
    	
      left: "300px"
    }, 200);
     $('#header').css('background', 'grey)');
  });

  /* Then push them back */
  $('#closeFilter').click(function() {
  	
    $('.filterNav').animate({
    	
      left: "-450px"
    }, 200);

    $('body').animate({
    	
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);
//end filter nav

//menu nav
var main = function() {
	
  $('#openMenu').click(function() {
  	
    $('.menuNav').animate({
    	
      right: "0px"
    }, 200);

    $('body').animate({
    	
      left: "-300px"
    }, 200);
  });

  /* Then push them back */
  $('#closeMenu').click(function() {
  	
    $('.menuNav').animate({
    	
      right: "-450px"
    }, 200);

    $('body').animate({
    	
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);
//end menu nav