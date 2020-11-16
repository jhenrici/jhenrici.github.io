// Get saved data from sessionStorage
let title = sessionStorage.getItem('title'); // Your code here
let lat_max = sessionStorage.getItem('lat_max');
let lat_min = sessionStorage.getItem('lat_min');
let lon_max = sessionStorage.getItem('lon_max');
let lon_min = sessionStorage.getItem('lon_min');

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
const route_id = document.getElementById('title');
const latMax = document.getElementById('lat_max');
const latMin = document.getElementById('lat_min');
const lonMax = document.getElementById('lon_max');
const lonMin = document.getElementById('lon_min');

route_id.innerHTML = title;
latMax.innerHTML =lat_max;
latMin.innerHTML = lat_min;
lonMax.innerHTML = lon_max;
lonMin.innerHTML = lon_min;