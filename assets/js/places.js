// google places api key = AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84

$(document).ready(function () {

    $("#submit").click(function () {
        var addressURL = "https://maps.googleapis.com/maps/api/geocode/json?&key=AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84"

        var fullAddress = "&address=" + $("#userStreet").val().trim() + ", " + $("#userCity").val().trim() + ", " + $("#userState").val().trim() + " " + $("#userZip").val().trim()

        console.log(fullAddress)

        addressURL = addressURL + fullAddress

        $.ajax({
            url: addressURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.results[0].geometry.location.lng)

            var userLocateLat = response.results[0].geometry.location.lat;
            var userLocateLong = response.results[0].geometry.location.lng;


            var weedURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?&radius=5000&location=" + userLocateLat + ", " + userLocateLong + "&query=dispensary&key=AIzaSyBa5pLEhR0kzF2FR2f7hRIv7lgtR8U3n84"
            //had to snag a plugin in Chrome to get the API key to return "Allow-Control-Allow-Origin" error
            console.log(weedURL);

            $.ajax({
                url: weedURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);

                var dispensary = response;
                $("#weedPanel").attr("class", "ui segments");
                for (i = 0; i < 10; i++) {
                    console.log(dispensary.results[i].name);
                    var report = $("<div>")
                    report.attr("class", "ui segment")
                    var dispensaryName = $("<p>")
                    dispensaryName.text(dispensary.results[i].name)
                    dispensaryName.attr("class", "dispensaryName")
                    $(report).append(dispensaryName);
                    // dispensaryName.attr("index", $(dispensary).index(dispensary[i]))






                    var nestSegment = $("<div>")
                    nestSegment.attr("class", "ui segments")
                    nestSegment.attr("class", "nestSegment")
                    nestSegment.hide()
                    $(report).append(nestSegment)

                    var weedInfo = $("<div>")
                    weedInfo.attr("class", "ui segment")
                    $(nestSegment).append(weedInfo)

                    var weedOpen = $("<p>")
                    if (dispensary.results[i].opening_hours.open_now == true) {
                        weedOpen.text("Open Now!")
                    } else {
                        weedOpen.text("Closed!")
                    }
                    $(weedInfo).append(weedOpen)

                    var weedAddress = $("<p>")
                    weedAddress.attr("class", weedAddress)
                    weedAddress.text(dispensary.results[i].formatted_address)
                    $(weedInfo).append(weedAddress);

                    $("#weedPanel").append(report)



                }




            })
            $(document).on("click", ".dispensaryName", function (event) {
                $(this).next().toggle()
            });
        });
    });
});