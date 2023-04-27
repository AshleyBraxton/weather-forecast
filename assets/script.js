var currentCity = document.getElementById('city-name');
var currentTemp = document.getElementById('current-temp');
var currentHumidity = document.getElementById('current-humidity');
var currentWind = document.getElementById('current-wind');
var dayOneTemp = document.getElementById('temp1');
var dayTwoTemp = document.getElementById('temp2');
var dayThreeTemp = document.getElementById('temp3');
var dayFourTemp = document.getElementById('temp4');
var dayFiveTemp = document.getElementById('temp5');
var dayOneHumidity = document.getElementById('humidity1');
var dayTwoHumidity = document.getElementById('humidity2');
var dayThreeHumidity = document.getElementById('humidity3');
var dayFourHumidity = document.getElementById('humidity4');
var dayFiveHumidity = document.getElementById('humidity5');
var dayOneWind = document.getElementById('wind1');
var dayTwoWind = document.getElementById('wind2');
var dayThreeWind = document.getElementById('wind3');
var dayFourWind = document.getElementById('wind4');
var dayFiveWind = document.getElementById('wind5');
var dayOneDate = document.getElementById('date1');
var dayTwoDate = document.getElementById('date2');
var dayThreeDate = document.getElementById('date3');
var dayFourDate = document.getElementById('date4');
var dayFiveDate = document.getElementById('date5');
var submitBtn = document.getElementById('submit');
var cityDisplay = document.getElementById('past-cities');
// ^^^sets up all my variables to be used later 
  
   async function displayCurrentWeather(cityChosen){
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityChosen + "&appid=adda0e0981546d2547cfe49575e4923c&units=imperial");
      const jsonData = await response.json();
      console.log(jsonData);
     console.log(jsonData.weather[0].description) 
     var iconCode = jsonData.weather[0].icon;
     var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
     $('#weatherIcon').attr('src', iconurl);
      var temperature = jsonData.main.temp;
      var humidity = jsonData.main.humidity;
      var windSpeed = jsonData.wind.speed;
      var dateUnix = jsonData.dt;
      var date= dayjs.unix(dateUnix).format('MM/D/YYYY')
      currentCity.textContent= cityChosen +' ('+date+')';
      currentTemp.textContent= temperature +'° farenheit';
      currentHumidity.textContent= 'Humidity: ' + humidity +' %';
      currentWind.textContent= 'Wind Speed: ' + windSpeed +' MPH';
    }
    // ^^^pulls the current weather data from the api, pulling the values wanted and displaying them onto the page 
    async function displayForecast(cityChosen) {
      const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ cityChosen + "&appid=adda0e0981546d2547cfe49575e4923c&units=imperial");
      const jsonData = await response.json();
      console.log(jsonData);
      var dateUnix = jsonData.list[3].dt;
      var date01= dayjs.unix(dateUnix).format('MM/D/YYYY')
      dayOneDate.textContent= date01
     var icon01 = jsonData.list[3].weather[0].icon;
     var iconurl = "http://openweathermap.org/img/w/" + icon01 + ".png";
     $('#dayOneIcon').attr('src', iconurl);
     var temp01 = jsonData.list[3].main.temp
     var humidity01 = jsonData.list[3].main.humidity
     var windSpeed01 = jsonData.list[3].wind.speed
     dayOneTemp.textContent = temp01 + '° Farenheit'
     dayOneHumidity.textContent = 'Humidity: '+ humidity01+ ' %'
     dayOneWind.textContent = 'Wind Speed: '+ windSpeed01 +' MPH'

     var dateUnix = jsonData.list[11].dt;
      var date02= dayjs.unix(dateUnix).format('MM/D/YYYY')
      dayTwoDate.textContent= date02
     var icon02 = jsonData.list[11].weather[0].icon;
     var iconurl = "http://openweathermap.org/img/w/" + icon02 + ".png";
     $('#dayTwoIcon').attr('src', iconurl);
     var temp02 = jsonData.list[11].main.temp
     var humidity02 = jsonData.list[11].main.humidity
     var windSpeed02 = jsonData.list[11].wind.speed
     dayTwoTemp.textContent = temp02 + '° Farenheit'
     dayTwoHumidity.textContent = 'Humidity: '+ humidity02+ ' %'
     dayTwoWind.textContent = 'Wind Speed: '+ windSpeed02 +' MPH'

     var dateUnix = jsonData.list[19].dt;
      var date03= dayjs.unix(dateUnix).format('MM/D/YYYY')
      dayThreeDate.textContent= date03
     var icon03 = jsonData.list[19].weather[0].icon;
     var iconurl = "http://openweathermap.org/img/w/" + icon03 + ".png";
     $('#dayThreeIcon').attr('src', iconurl);
     var temp03 = jsonData.list[19].main.temp
     var humidity03 = jsonData.list[19].main.humidity
     var windSpeed03 = jsonData.list[19].wind.speed
     dayThreeTemp.textContent = temp03 + '° Farenheit'
     dayThreeHumidity.textContent = 'Humidity: '+ humidity03+ ' %'
     dayThreeWind.textContent = 'Wind Speed: '+ windSpeed03 +' MPH'

     var dateUnix = jsonData.list[29].dt;
     var date04= dayjs.unix(dateUnix).format('MM/D/YYYY')
     dayFourDate.textContent= date04
     var icon04 = jsonData.list[29].weather[0].icon;
     var iconurl = "http://openweathermap.org/img/w/" + icon04 + ".png";
     $('#dayFourIcon').attr('src', iconurl);
     var temp04 = jsonData.list[29].main.temp
     var humidity04 = jsonData.list[29].main.humidity
     var windSpeed04 = jsonData.list[29].wind.speed
     dayFourTemp.textContent = temp04 + '° Farenheit'
     dayFourHumidity.textContent = 'Humidity: '+ humidity04+ ' %'
     dayFourWind.textContent = 'Wind Speed: '+ windSpeed04 +' MPH'

     var dateUnix = jsonData.list[35].dt;
     var date05= dayjs.unix(dateUnix).format('MM/D/YYYY')
     dayFiveDate.textContent= date05
     var icon05 = jsonData.list[35].weather[0].icon;
     var iconurl = "http://openweathermap.org/img/w/" + icon05 + ".png";
     $('#dayFiveIcon').attr('src', iconurl); 
     var temp05 = jsonData.list[35].main.temp
     var humidity05 = jsonData.list[35].main.humidity
     var windSpeed05 = jsonData.list[35].wind.speed
     dayFiveTemp.textContent = temp05 + '° Farenheit'
     dayFiveHumidity.textContent = 'Humidity: '+ humidity05+ ' %'
     dayFiveWind.textContent = 'Wind Speed: '+ windSpeed05 +' MPH'
    }
// ^^^Pulls data from the api for the future displayForecast, pulling the info I want and displaying it to the page 
    function displayPreviousCities(){
      cityDisplay.textContent = '';
      var pastCities = localStorage.getItem("pastCities");
      var parsed = JSON.parse(pastCities);
      if (parsed !== null) {
  
          for (var i = 0; i < parsed.length; i++) {
      
              var createLi = document.createElement("li");
              createLi.textContent = parsed[i].City;
              
              cityDisplay.appendChild(createLi);
      
          }
      }
       
    }
    // ^^This function displays the previous cities from local storage onto the page 
    function saveCity(cityChosen) {
      if (cityChosen === null) {
      return;
  
      } else {
      newCity = {
              City:cityChosen,
          }
          var pastCities = localStorage.getItem("pastCities");
          if (pastCities === null) {
              pastCities = [];
          } else {
              pastCities = JSON.parse(pastCities);
          }
          pastCities.push(newCity);
          var newSearch = JSON.stringify(pastCities);
          localStorage.setItem("pastCities", newSearch);
        }
      displayPreviousCities()
      }
// ^^^Once the user inputs a city and hits sumbit that sity is saved to local storage 
submitBtn.addEventListener('click',event =>{
  var cityChosen = $("input:text").val();
  console.log(cityChosen)
displayCurrentWeather(cityChosen);
displayForecast(cityChosen);
saveCity(cityChosen)
$("input:text").val('');
})
// ^^^when the user hits the submit GamepadButton, the city they entered is collected and the data for that city is pulled and displayed 
cityDisplay.addEventListener('click', event =>{
  console.log(event.target.innerText)
  displayCurrentWeather(event.target.innerText)
  displayForecast(event.target.innerText)
})
// ^^makes the previous city list into buttons, allowing the user to click any of them and pull up the data for that city again without having to search again 
displayPreviousCities();
// ^^displays the previous cities from local storage on load so they are readily available 
