// google places api key = AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84

$(document).ready(function() {

    $("#submit").click(function() {
        var queryURL = "https://maps.googleapis.com/maps/api/js?=";
        var apiKey = "AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84"
        var userAddress = "&street-address=" + $("#userStreet").val() + $("#userCity").val() + ", " + $("#userState").val();
        queryURL = encodeURI(queryURL + userAddress + apiKey)
        console.log(queryURL);
    })
});