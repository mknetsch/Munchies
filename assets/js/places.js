// google places api key = AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84

$(document).ready(function() {

    $("#submit").click(function() {
        var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=5000&keyword=Dispensaries";
        var apiKey = "&key=AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84"
        //had to snag a plugin in Chrome to get the API key to return "Allow-Control-Allow-Origin" error
        var location = "&location=" + $("#userStreet").val().trim() + $("#userCity").val().trim() + ", " + $("#userState").val().trim();
        queryURL = encodeURI(queryURL + location + apiKey)
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
    });
})
});