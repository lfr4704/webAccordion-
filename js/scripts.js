$( document ).ready( function () {
// click is an event listener
  $("#planets dt").click( function(e){ 
  	console.log($(this).next().html());

  	$("#planets dd").css("display", "none");
  	
  	//when you do not call for the characteristics of display it assumes it is the default of the property
  	if( $(this).next().css("display") == "none" ) {

  	$(this).next().css("display", "block");
  } else {
  		$(this).next().css("display", "none");
  }
  
  });

});
