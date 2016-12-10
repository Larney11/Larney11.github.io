function initMap() {
    var uluru = {lat: 53.3033435, lng: -6.3663455};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}