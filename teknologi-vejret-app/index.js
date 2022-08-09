var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "query": "query Dataset {forecasts_hour(where: {PriceArea: {_eq: \"DK2\"}} order_by: {HourUTC: desc} limit: 3 offset: 0){HourUTC HourDK PriceArea ForecastType ForecastDayAhead ForecastIntraday Forecast5Hour Forecast1Hour ForecastCurrent TimestampUTC TimestampDK }}"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://data-api.energidataservice.dk/v1/graphql", requestOptions)
  .then(response => response.json())
  .then(result => {
      console.log(result)
    
      document.getElementById('tester').innerHTML = 'Solar: ' + result.data.forecasts_hour[0].ForecastCurrent + '</br>Onshore wind: ' + result.data.forecasts_hour[1].ForecastCurrent + '</br>Offshore wind: ' + result.data.forecasts_hour[2].ForecastCurrent
      document.getElementById('testtitle').innerHTML = result.data.forecasts_hour[0].HourDK



    })
  .catch(error => console.log('error', error));