const api = {
    key: "81e6874c52f7a8c42cb7a5a3fd2b0d5c",
    baseurl: "https://api.openweathermap.org/data/2.5/weather?q="
}


const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);


function setQuery(event){
if(event.keyCode == 13){
    getResults(searchbox.value);
    
    
}
}


function getResults(query) {

    fetch( api.baseurl + query + '&appid=' + api.key + '&units=metric').then(weather => {
        return weather.json();
    }).then(displayResults);
    

}

function displayResults(weather){
   console.log(weather);
   let city = document.querySelector(".location .city");
   city.innerHTML = weather.name + ", " + weather.sys.country;

   let d = new Date();
   let date = document.querySelector(".location .date");
   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
   date.innerHTML = days[d.getDay()] + " " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();

   let temp = document.querySelector(".current .temp");
   temp.innerHTML = Math.floor(weather.main.temp) + "<span>°C</span>";

   let weather_el = document.querySelector(".current .weather");
   weather_el.innerHTML = weather.weather[0].main;
   
   let icon = document.querySelector(".current .icon");
   const icon_img = weather.weather[0].icon;
   const imageURL = "http://openweathermap.org/img/wn/" + icon_img + "@2x.png";
   icon.innerHTML = "<img src=" + imageURL + ">";

   let hi_low = document.querySelector(".current .hi-low");
   hi_low.innerHTML = Math.floor(weather.main.temp_min) + "°C / " + Math.floor(weather.main.temp_max) + "°C";


}





