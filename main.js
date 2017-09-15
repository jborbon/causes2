var  message, donationsForm, first_name, last_name, address, phone, 
email, donation, formOfPayment, cardInfo, date;

document.addEventListener("DOMContentLoaded",function(){
	donationsForm = document.getElementById("donationsForm");
	message = document.getElementById("message");
	first_name = document.getElementById("first_name");
	last_name = document.getElementById("last_name");
	address = document.getElementById("address");
	phone = document.getElementById ("phone");
	email = document.getElementById("email");
	donation = document.getElementById("donation");
	formOfPayment = document.getElementById("formOfPayment");
	cardInfo = document.getElementById("cardInfo");
	date = document.getElementById("date")
	donationsForm.addEventListener("submit",function(event){
		console.log(event);
		event.preventDefault();
		message.innerText = "Thank you! A donation has been made in your name to the Open Arms Foundation! An email will be sent to you shortly regarding your donation.";
		event.target.reset();
		// clearForm(document.forms[0]);
	});
});

// function clearForm(form){
// 	form.childNodes.forEach(function(element){
// 		if(element.tagName == "INPUT") {
// 			element.style.display = "none";
// 		}
// 	});
// }