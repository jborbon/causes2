var message, questionForm, first_name; last_name, email, questions;

document.addEventListener("DOMContentLoaded",function(){
	questionForm = document.getElementById("questionForm");
	message = document.getElementById("message");
	first_name = document.getElementById("first_name");
	last_name = document.getElementById("last_name");
	email = document.getElementById("email");
	questions = document.getElementById("questions");
	questionForm.addEventListener("submit", function(event){
		console.log(event);
		event.preventDefault();
		message.innerText = "You're question has been sent to us. We will contact you shortly!";
		event.target.reset();
	});
});