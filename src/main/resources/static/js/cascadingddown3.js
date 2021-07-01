var accItem = document.getElementsByClassName('formItem');
var accHD = document.getElementsByClassName('formItemHeading');
for (i = 0; i < accHD.length; i++) {
	accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
	var itemClass = this.parentNode.className;
	for (i = 0; i < accItem.length; i++) {
		accItem[i].className = 'formItem close';
	}
	if (itemClass == 'formItem close') {
		this.parentNode.className = 'formItem open';
	}
}


let formElem = document.getElementById("addCountryForm");

formElem.onsubmit = async (e) => {
	e.preventDefault();

	let formData = new FormData();
	let countryName = document.getElementById("countryname").value;
	formData.append("countryname", countryName);

	let response = await fetch('/api/country', {
		method: 'POST',
		body: formData
	});

	let result = await response.json();

	if (response.ok) {
		alert(response.status);
		//result.countryname
	} else {
		alert("Error Occurred.. !!");
	}


};





let Buttons = document.querySelectorAll(".selectSection button");

// loop through the buttons using for..of 
for (let button of Buttons) {
	// listen for a click event 
	button.addEventListener('click', (e) => {
		// et = event target
		const et = e.target;
		// slect active class
		const active = document.querySelector(".active");
		// check for the button that has active class and remove it
		if (active) {
			active.classList.remove("active");
		}
		// add active class to the clicked element 
		et.classList.add("active");

		// select all classes with the name content
		let allContent = document.querySelectorAll('.content');

		// loop through all content classes
		for (let content of allContent) {
			// display the content if the class has the same data-attribute as the button 
			if (content.getAttribute('data-number') === button.getAttribute('data-number')) {
				content.style.display = "block";
			}
			// if it's not equal then hide it.
			else {
				content.style.display = "none";
			}
		}
	});
}
