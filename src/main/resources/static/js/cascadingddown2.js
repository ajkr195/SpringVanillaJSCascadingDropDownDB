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
		alert(result.countryname);
		//result.countryname
	} else {
		alert("Error Occurred.. !!");
	}


};

