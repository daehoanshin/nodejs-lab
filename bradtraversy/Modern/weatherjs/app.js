// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

document.getElementById('w-change-btn').addEventListener('click', e =>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation('Miami', 'FL');

  // Set location 
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locaModal').modal('hide');
});


weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err))