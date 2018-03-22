$(function () {



    $("#submit").click(function () {



        var queryURL = "https://api.eatstreet.com/publicapi/v1/restaurant/search?method=delivery";

        var apiKey = "&access-token=0f01993a72128534"

        var userAddress = "&street-address=" + $("#userStreet").val() + $("#userCity").val() + ", " + $("#userState").val();

        queryURL = encodeURI(queryURL + userAddress + apiKey)

        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var restaurants = response.restaurants
            $("#restPanel").attr("class", "ui segments")
            for (i = 0; i < restaurants.length; i++) {

                console.log(restaurants[i].name)
                var restSeg = $("<div>")
                restSeg.attr("class", "ui segment")

                var restName = $("<button>")
                restName.text(restaurants[i].name)
                restName.attr("id", "restName")
                restName.attr("index",$(restaurants).index(restaurants[i]))
                $(restSeg).append(restName)

                $("#restPanel").append(restSeg)
            }



            $(document).click("button", function () {

                alert($().index(this))
                
                // var nestSegment = $("<div>")
                // nestSegment.attr("class", "ui segments")
                // $("#restName").append(nestSegment)

                // var restInfo = $("<div>")
                // restInfo.attr("class", "ui segment")
                // $(nestSegment).append($(restInfo))
            })
        });
    });
});