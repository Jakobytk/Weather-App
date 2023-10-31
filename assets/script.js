var submitBtn = document.getElementById('submitBtn');
var weatherDiv  = document.querySelector('.weatherQuery');

function getParams() {
    // Get the query values
    var query = document.getElementById('userInput').value;
  
    searchApi(query);
  }

  function searchApi(query) {
    var weatherQueryUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=&limit=5&appid=601dabc42e769138a9112989d600cc58'
  
    if (query) {
        weatherQueryUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='+ query +'&limit=5&appid=601dabc42e769138a9112989d600cc58'
    }
console.log(weatherQueryUrl);
fetch(weatherQueryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(date);
  
        weatherDiv.innerHTML = ''; 
  
        data.forEach(function (weather) {
          var weatherQuery = document.createElement('div');
          weatherQuery.innerHTML = weather.title;
          weatherDiv.appendChild(weatherQuery);
      });
    });
}

