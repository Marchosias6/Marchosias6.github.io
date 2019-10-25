//Code du comportement de la navbar
window.onscroll = function() {myFunction()};
var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;
var image = document.querySelector(".Parent_festival");

var boundboxnav = navbar.getBoundingClientRect();
var boundboximage = image.getBoundingClientRect();
var opacity = boundboxnav.bottom > boundboximage.bottom;
function myFunction() {
	boundboxnav = navbar.getBoundingClientRect();
	boundboximage = image.getBoundingClientRect();
	opacity = boundboxnav.bottom > boundboximage.bottom;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky"); 
  } else {
    navbar.classList.remove("sticky");
  }
  if (opacity) {
		navbar.classList.add("opacity");
		 navbar.classList.remove("unopacity");

	}	
	else{
		navbar.classList.remove("opacity")	;
		navbar.classList.add("unopacity");

	}
} 
//Comportement du bouton envoyer
var placeHolder=document.querySelector('.mail');



function newsLetter(){
	alert('Merci! Vous avez été inscrits à notre Newsletter!');
	placeHolder.value='';
}








