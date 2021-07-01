//drawTable();

function drawTable() {
	fetch("http://localhost:8080/api/countries")
		.then(function(response) {
				if (response.status !== 200) { console.log('Error. Status Code:' + response.status); return; }
				response.json().then(function(data) {
					console.log(data);
					drawDataTable(data);
				});
			}
		)
		.catch(function(err) {console.error('Fetch Error Occurred: ', err);});
}

function drawDataTable(list) {
	var el_up = document.getElementById("dataTable");
	var cols = [];
	for (var i = 0; i < list.length; i++) {
		for (var k in list[i]) {
			if (cols.indexOf(k) === -1) {
				cols.push(k);
			}
		}
	}
	var table = document.createElement("table");
	var tr = table.insertRow(-1);
	for (var i = 0; i < cols.length; i++) {
		var theader = document.createElement("th");
		theader.innerHTML = cols[i];
		tr.appendChild(theader);
	}
	for (var i = 0; i < list.length; i++) {
		trow = table.insertRow(-1);
		for (var j = 0; j < cols.length; j++) {
			var cell = trow.insertCell(-1);
			cell.innerHTML = list[i][cols[j]];
		}
	}
	var el = document.getElementById("dataTable");
	el.innerHTML = "";
	el.appendChild(table);
}  