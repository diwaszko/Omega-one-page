  function initMap() {
	var uluru = {lat: 52.3599523, lng: 4.8812672};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 10,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
  }
