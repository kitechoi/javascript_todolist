const API_KEY = "cf2456485aacf0450cbb18dce74e9a2a";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `${data.name} ${data.sys.country}`;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
        console.log(data.name, data.weather[0].main);
    }); 
    console.log("you live in", url);
}

function onGeoError() {
    alert("ㅠ_ㅠ fail to get your geolocation");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
