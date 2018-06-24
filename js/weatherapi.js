var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    var towns = request.response;
    showtowns(towns);
}

function showtowns(jsonObj) {
    var towns = jsonObj[towns];
}