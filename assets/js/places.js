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
                var dispensary = response.dispensary
                $("#weedPanel").attr("class", "ui raised segments")
                for (i = 0; i < dispensary.length; i++){
                    
                    var report = $("<div>")
                    report.attr("class", "ui raised segment")

                    var dispensaryName = $("<button>")
                    dispensaryName.text(restaurants[i].name)
                    dispensaryName.attr("id", "dispensaryName")
                    dispensaryName.attr("index", $(dispensary).index(dispensary[i]))
                    $("#weedPanel").append(report)
                }

                  

                    
            })
            $("#weedPanel").click("button", function (event) {
                var nestedSegment = $("<div>")
                nestedSegment.attr("class", "ui raised segment")
                $(event.target).parent().append(nestedSegment)

                var weedInfo = $("<div>")
                weedInfo.attr("class", "ui raised segment")
                $(nestedSemgnet).append($(weedInfo))
            })
        });
    })
});