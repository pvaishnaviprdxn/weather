var x = new XMLHttpRequest();
x.open("GET","http://api.openweathermap.org/data/2.5/weather?q=Navi Mumbai,India&appid=d2466554282f41707c7460fe6fe1033f",true);
x.send();
x.onreadystatechange = function(){
    if(x.readyState == 4){
        var obj = JSON.parse(x.responseText);
        var wedes = obj.weather;
        //getting weather description eg:sunny,cloudy,smoke etc
        var wdescription = (wedes[0].description);
        var temperature = obj.main.temp;
        //converting temp from kelvin to degree celcius;
        var tempdeg = temperature - 273.15; 
        disp(wdescription,tempdeg);
        //}
    }
}