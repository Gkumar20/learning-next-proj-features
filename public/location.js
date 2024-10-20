
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    console.log('latitude : ',position.coords.latitude);
    console.log('longitude : ',position.coords.longitude);
  
  }
  
  getLocation();
  