// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){ //only can add a listener where the code exister when we run the first time (when page loads)
	$(this).toggleClass("completed");
});

//CLick on X to delete Todo 
$("ul").on("click", "span", function(event){
	event.stopPropagation(); // Prevent Event Bubbling
	$(this).parent().fadeOut(500, function (){
		$(this).remove();
	}); //Remove the element and the parent
});

$("input[type='text'").on("keypress", function(event){
	//which = what carachter is presed
	if(event.which === 13){
		//Grabbing new todo text from input
		var newTodo = $(this).val(); 
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newTodo + "</li>")
	}
});

$(".fa-plus").click(function (){
	$("input[type='text'").fadeToggle(); /* fades in and out the input */
});