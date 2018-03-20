$(function () {

    $("#submit").click(function () {

        

        var queryURL = "https://api.eatstreet.com/publicapi/v1/restaurant/search?method=delivery";

       var apiKey = "&access-token=0f01993a72128534"

        var fullAddress = $("#userStreet").val().trim()

        var userAddress = "&street-address="+fullAddress;

        queryURL = encodeURI( queryURL + userAddress + apiKey )

        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            for(i = 0; i < response.restaurants.length; i++ )
            console.log(response.restaurants[i].name)


        });
    });
});