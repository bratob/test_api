// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://iot.fhh-infra.de/api/v1/tags/parksensoren-boenischplatz/devices?auth=2885232b36725f9cff71f8d80a1b584a', true)

request.onload = function () {
// Begin accessing JSON data here
var data = JSON.parse(this.response)
document.getElementById("root").innerHTML = data.main.temp;
//document.getElementById("root").innerHTML = JSON.stringify(data);
}

// Send request
request.send()
