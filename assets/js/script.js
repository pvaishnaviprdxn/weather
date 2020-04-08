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
/*function to display weather and temp*/
function disp(wdescription,tempdeg){
    var upper = wdescription.toUpperCase();
    var textdispw= document.createElement("textw");
    textdispw.innerHTML = upper;
    document.getElementById("wvalue").appendChild(textdispw);
    var textdispt= document.createElement("textt");
    textdispt.innerHTML = tempdeg;
    document.getElementById("tvalue").appendChild(textdispt);
    bg(tempdeg);
}
/* function to change background based on temperature and weather*/
function bg(tempdeg){
    if(tempdeg < 20){
        var backg = document.getElementById("getweather-and-temp");
        backg.classList.add("backimgcold");
    }
    else if(tempdeg >20 && tempdeg <30){
        var backg = document.getElementById("getweather-and-temp");
        backg.classList.add("backimgwarm");
    }
    else{
        var backg = document.getElementById("getweather-and-temp");
        backg.classList.add("backimgsun");
    }
}