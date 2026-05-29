async function getWeather(){

let city=document.getElementById("city").value;

let url=`https://wttr.in/${city}?format=j1`;

try{

let response=await fetch(url);

let data=await response.json();

document.getElementById("weather").innerHTML=`
<h3>${city}</h3>
<p>Temperature: ${data.current_condition[0].temp_C} °C</p>
<p>Humidity: ${data.current_condition[0].humidity}%</p>
<p>Weather: ${data.current_condition[0].weatherDesc[0].value}</p>
`;

}
catch(error){

document.getElementById("weather").innerHTML=
"Error Fetching Data";

}

}