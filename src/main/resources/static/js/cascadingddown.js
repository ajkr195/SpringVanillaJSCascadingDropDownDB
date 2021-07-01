
let countrydropdown = document.getElementById('countrySel');
let statedropdown = document.getElementById("stateSel");
let citydropdown = document.getElementById("citySel");
let zipdropdown = document.getElementById("zipSel");



fetch("http://localhost:8080/api/countries")
	.then(
		function(response) {
			if (response.status !== 200) {
				console.warn('Looks like there was a problem. Status Code: ' +
					response.status);
				return;
			}
			response.json().then(function(data) {
				console.log(data);
				let option;
				for (let i = 0; i < data.length; i++) {
					option = document.createElement('option');
					option.text = data[i].countryname;
					option.value = data[i].id;
					countrydropdown.add(option);
				}
			});
		}
	)
	.catch(function(err) {
		console.error('Fetch Error Occurred: ', err);
	});

countrydropdown.onchange = function() {
	var elem = (typeof this.selectedIndex === "undefined" ? window.event.srcElement : this);
	var value = elem.value || elem.options[elem.selectedIndex].value;
	statedropdown.length = 1;
	citydropdown.length = 1;
	zipdropdown.length = 1;
	fetch("http://localhost:8080/api/statesbycountry/" + value)
		.then(
			function(response) {
				if (response.status !== 200) {
					console.warn('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}
				response.json().then(function(data) {
					console.log(data);
					let option;
					for (let i = 0; i < data.length; i++) {
						option = document.createElement('option');
						option.text = data[i].statename;
						option.value = data[i].id;
						statedropdown.add(option);
					}
				});
			}
		)
		.catch(function(err) {
			console.error('Fetch Error Occurred: ', err);
		});
}


statedropdown.onchange = function() {
	var elem = (typeof this.selectedIndex === "undefined" ? window.event.srcElement : this);
	var value = elem.value || elem.options[elem.selectedIndex].value;
	citydropdown.length = 1;
	zipdropdown.length = 1;
	fetch("http://localhost:8080/api/citiesbystate/" + value)
		.then(
			function(response) {
				if (response.status !== 200) {
					console.warn('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}
				response.json().then(function(data) {
					console.log(data);
					let option;
					for (let i = 0; i < data.length; i++) {
						option = document.createElement('option');
						option.text = data[i].cityname;
						option.value = data[i].id;
						citydropdown.add(option);
					}
				});
			}
		)
		.catch(function(err) {
			console.error('Fetch Error Occurred: ', err);
		});

}


citydropdown.onchange = function() {

	var elem = (typeof this.selectedIndex === "undefined" ? window.event.srcElement : this);
	var value = elem.value || elem.options[elem.selectedIndex].value;
	zipdropdown.length = 1;
	fetch("http://localhost:8080/api/zipcodesbycity/" + value)
		.then(
			function(response) {
				if (response.status !== 200) {
					console.warn('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}
				response.json().then(function(data) {
					console.log(data);
					let option;
					for (let i = 0; i < data.length; i++) {
						option = document.createElement('option');
						option.text = data[i].zipcode;
						option.value = data[i].id;
						zipdropdown.add(option);
					}
				});
			}
		)
		.catch(function(err) {
			console.error('Fetch Error Occurred: ', err);
		});

}




