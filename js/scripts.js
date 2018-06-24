var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?q=Franklin,us&appid=3de89a15e299832c9c639c4d433af31f&units-imperial',true );

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('minTemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('maxTemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
   
    var descriptioncode = weatherInfo.weather[0].description;
    var weather_des = "//openweathermap.org/img/w/" + description ; document.getElementById('weather_description').src= description;
    
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path ="http://openweathermap.org/img/w/10d.png";
    document.getElementById('weather_icon').src= icon_path;
    
}  //end of the function