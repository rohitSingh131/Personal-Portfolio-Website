// ___________sticky nav________

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky",window.scrollY > 0);  
})


// ___________Read More/Read Less_______

let button = document.querySelectorAll('.button');
for (let i = 0; i<button.length; i++){
	button[i].addEventListener('click', function(){
		button[i].parentNode.classList.toggle('active')
	})
}

// ____________Side Menu___________

var sidemu = document.getElementById("sidemenu");
function openmenu(){
	sidemu.style.right = "0"
}
function closemenu(){
	sidemu.style.right = "-200px"	
}