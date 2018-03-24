// google places api key = AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84

$(document).ready(function () {

    $("#submit").click(function () {
        var addressURL = "https://maps.googleapis.com/maps/api/geocode/json?&key=AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84"

        var fullAddress = "&address=" + $("#userStreet").val().trim() + ", " + $("#userCity").val().trim()+", "+$("#userState").val().trim()+" "+$("#userZip").val().trim()

        console.log(fullAddress)

        addressURL = addressURL + fullAddress

        $.ajax({
            url: addressURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.results[0].geometry.location)

            var userLocate = response.results[0].geometry.location


            var weedURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?&radius=5000&query=dispensary&key=AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84"
            //had to snag a plugin in Chrome to get the API key to return "Allow-Control-Allow-Origin" error
            console.log(weedURL);

            $.ajax({
                url: weedURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
            })
        });
    })
});