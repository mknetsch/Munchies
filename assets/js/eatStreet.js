$(function () {



    $("#submit").click(function () {



        var queryURL = "https://api.eatstreet.com/publicapi/v1/restaurant/search?method=delivery";

        var apiKey = "&access-token=0f01993a72128534"

        var userAddress = "&street-address=" + $("#userStreet").val().trim() + $("#userCity").val().trim() + ", " + $("#userState").val().trim();

        queryURL = encodeURI(queryURL + userAddress + apiKey)

        

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#restPanel").attr("class", "ui segments")
            for (i = 0; i < response.restaurants.length; i++) {
                console.log(response.restaurants[i].name)
                var restSeg = $("<div>")
                restSeg.attr("class", "ui segment")
                var restName = $("<p>")
                restName.text(response.restaurants[i].name)
                $(restSeg).append(restName)
                var restInfo = $("ui segments")
                $("#restPanel").append(restSeg)
            }

        });
    });
});