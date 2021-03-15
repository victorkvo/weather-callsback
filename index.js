// defining variables
let search = document.getElementById("search"),
    submit = document.getElementById("submit"),
    cityName = document.getElementById("cityName"),
    condition = document.getElementById("condition");

// button that initiates main function
submit.addEventListener('click', getDressed)


function getDressed(e){
    e.preventDefault();
    let city = search.value;

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "865cddfcedmsh3d5ef6811e51047p164b80jsnf7e801f179b0");
myHeaders.append("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");
myHeaders.append("865cddfcedmsh3d5ef6811e51047p164b80jsnf7e801f179b0", "");
myHeaders.append("Cookie", "__cfduid=d77f085310e7aa2820930c04becd91c2b1615746732");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial&mode=xml%2C%20html`, requestOptions)
.then(response => response.json())
.then(result => {
  // displays name of city searched
  cityName.innerHTML = result.name;
  // condition.innerHTML = result.weather[0].main;  >>  code to display weather condition; not used.
  //displays temperature
  temp.innerHTML = result.main.temp;

// testing for return outputs
  console.log(result.weather[0].main);
  console.log(result.main.temp);
  console.log(result.name);

// dog clothing if/else statements
if (result.weather[0].main=="Rain") {
  document.getElementById("clothes").src="/weather-callsback/images/raincoat.jpg";
  document.getElementById("shoes").src="/weather-callsback/images/rainboots.jpg"; 
  document.getElementById("access").src="/weather-callsback/images/umbrella.jpg"; 
  condition.innerHTML = "Rainy"
} else if (result.weather[0].main!=="Rain" && result.main.temp>=80) {
  document.getElementById("clothes").src="/weather-callsback/images/shirt.jpg";
  document.getElementById("shoes").src="/weather-callsback/images/jordans.jpg"; 
  document.getElementById("access").src="/weather-callsback/images/sunglass.jpg"; 
  condition.innerHTML = "Not Rainy"
} else if (result.weather[0].main!=="Rain" && result.main.temp<=60) {
  document.getElementById("clothes").src="/weather-callsback/images/sweater.jpg"; 
  document.getElementById("shoes").src="/weather-callsback/images/jordans.jpg"; 
  document.getElementById("access").src="/weather-callsback/images/sunglass.jpg"; 
  condition.innerHTML = "Not Rainy"
} else {
  document.getElementById("clothes").src="/weather-callsback/images/shirt.jpg"; 
  document.getElementById("shoes").src="/weather-callsback/images/jordans.jpg"; 
  document.getElementById("access").src="/weather-callsback/images/sunglass.jpg"; 
  condition.innerHTML = "Not Rainy"
}
// clears search bar input
document.getElementById('search').value='';
})
}







// fetch result format
// {
//     "coord": {
//         "lon": -95.3633,
//         "lat": 29.7633
//     },
//     "weather": [
//         {
//             "id": 500,
//             "main": "Rain",
//             "description": "light rain",
//             "icon": "10d"
//         },
//         {
//             "id": 741,
//             "main": "Fog",
//             "description": "fog",
//             "icon": "50d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 69.28,
//         "feels_like": 68.77,
//         "temp_min": 68,
//         "temp_max": 71.01,
//         "pressure": 1013,
//         "humidity": 100
//     },
//     "visibility": 805,
//     "wind": {
//         "speed": 13.8,
//         "deg": 170,
//         "gust": 24.16
//     },
//     "rain": {
//         "1h": 0.51
//     },
//     "clouds": {
//         "all": 90
//     },
//     "dt": 1615750303,
//     "sys": {
//         "type": 1,
//         "id": 4850,
//         "country": "US",
//         "sunrise": 1615725129,
//         "sunset": 1615768145
//     },
//     "timtemp": -18000,
//     "id": 4699066,
//     "name": "Houston",
//     "cod": 200
// }