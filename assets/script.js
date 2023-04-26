async function logJSONData() {
  var cityChosen = 'london'
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityChosen + "&appid=adda0e0981546d2547cfe49575e4923c&units=imperial");
    const jsonData = await response.json();
    console.log(jsonData);
   console.log(jsonData.weather[0].description) 
  }
  logJSONData()

  async function logJSONDataForecast() {
    var cityChosen = 'london'
      const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ cityChosen + "&appid=adda0e0981546d2547cfe49575e4923c&units=imperial");
      const jsonData = await response.json();
      console.log(jsonData);
     console.log(jsonData.list[39].main.temp) 
    }
    logJSONDataForecast()
  