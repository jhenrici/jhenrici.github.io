// Get saved data from sessionStorage
let title = sessionStorage.getItem('title'); // Your code here
let lat_max = sessionStorage.getItem('lat_max');
let lat_min = sessionStorage.getItem('lat_min');
let lon_max = sessionStorage.getItem('lon_max');
let lon_min = sessionStorage.getItem('lon_min');

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
const route_id = document.getElementById('title');
const max_lat = document.getElementById('lat_max');
const min_lat = document.getElementById('lat_min');
const max_lon = document.getElementById('lon_max');
const min_lon = document.getElementById('lon_min');

route_id.innerHTML = title;
max_lat.innerHTML = lat_max;
min_lat.innerHTML = lat_min;
max_lon.innerHTML = lon_max;
min_lon.innerHTML = lon_min;