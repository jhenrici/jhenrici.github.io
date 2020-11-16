const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; //Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) { 
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here
    
    fetch(busRouteURL) //
      .then((response) => { 
        return response.json(); 
      })
      .then((route) => { 
        let title; 
        let max_lat; 
        let min_lat;
        let max_lon; 
        let min_lon;
        
        if (typeof route.title !== "undefined") {
          sessionStorage.setItem("title", route.title);  
          sessionStorage.setItem("max_lat", route.lat_max);
          sessionStorage.setItem("min_lat", route.lat_min);
          sessionStorage.setItem("max_lon", route.lon_max);
          sessionStorage.setItem("min_lon", route.lon_min);

          message =
            sessionStorage.getItem("title") +
            " <br>Max Latitude: " +
            sessionStorage.getItem("max_lat") +
            " <br>Min Latitude: " +
            sessionStorage.getItem("min_lat") +
            " <br>Max Longitude: " +
            sessionStorage.getItem("max_lon") +
            " <br>Min Longitude: " +
            sessionStorage.getItem("min_lon");
      }
      else {
        message = "No bus info available"
      }
      main.innerHTML = "Bus Route: " + message;})  
      .catch((err) => {   
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
