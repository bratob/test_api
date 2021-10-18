// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Dresden&appid=8fd2d96a373a341230be93f9623e3961&mode=json', true)

request.onload = function () {
// Begin accessing JSON data here
var data = JSON.parse(this.response)
document.getElementById("root").innerHTML = data.main.temp;
//document.getElementById("root").innerHTML = JSON.stringify(data);
}

// Send request
request.send()