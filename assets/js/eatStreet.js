//short for document.ready function
$(function () {


    //gets click on submit button
    $("#submit").click(function () {


        //standarized eatstreet queryURL
        var queryURL = "https://api.eatstreet.com/publicapi/v1/restaurant/search?method=delivery";

        //readable apikey
        var apiKey = "&access-token=0f01993a72128534"

        //gets user address from input
        var userAddress = "&street-address=" + $("#userStreet").val().trim() + $("#userCity").val().trim() + ", " + $("#userState").val().trim();

        //encodes query url for api
        queryURL = encodeURI(queryURL + userAddress + apiKey)


        //initial ajax call
        $.ajax({
            url: queryURL,
            method: "GET"
            //ajax return function
        }).then(function (response) {
            
            //bug testing queryURL
            console.log(response);

            //shortens response for easier coding
            var restaurants = response.restaurants

            //gives the restPanel its css class
            $("#restPanel").attr("class", "ui segments")

            //loop for each delivery restaurant
            for (i = 0; i < restaurants.length; i++) {

                //bug check for rest. names
                console.log(restaurants[i].name)

                //initializes the restaurant Segment and its css class
                var restSeg = $("<div>")
                restSeg.attr("class", "ui segment")

                //initialize the restaurant name's html element
                var restName = $("<p>")
                //gets the restaurant name from the api response
                // for the p tag
                restName.text(restaurants[i].name)
                //gives restName a class for css targetting
                restName.attr("class", "restName")
                //appends restName to the restSeg
                $(restSeg).append(restName)

                //initializes a nested segment
                var nestSegment = $("<div>")
                //sets the css for nested segments
                nestSegment.attr("class", "ui segments")
                //css targetting for the nested segment
                nestSegment.attr("class", "nestSegment")
                //nested segments are now hidden by default
                nestSegment.hide()
                //appends a nested segment to each restaurant name
                $(restSeg).append(nestSegment)

                //initializes the restaurant info segment
                var restInfo = $("<div>")
                //sets css for segments
                restInfo.attr("class", "ui segment")
                // initializes a p tag for restaurant "open or closed"
                var restOpen = $("<p>")
                //css targetting
                restOpen.attr("class", "restOpen")
                //conditional for whether restaurant open or closed
                if (restaurants[i].open == true) {
                    //if open, text is Open
                    restOpen.text("Open Now!")
                } else {
                    //if closed text is Closed
                    restOpen.text("Closed Now")
                }
                //appends Open/Closed to Info
                $(restInfo).append(restOpen)

                //initializes the link for the restaurant
                var restURL = $("<a>")
                //gets the restaurant link from the api respones
                restURL.attr("href", restaurants[i].url)
                //opens target in a new tab
                restURL.attr("target", "_blank")
                //css targetting
                restURL.attr("class", "restURL")
                //link text, instead of full URL
                restURL.text("Click here!")
                //appends link to Info
                $(restInfo).append(restURL)

                //initializes restaurant location
                var restLocate = $("<p>")
                //css targetting
                restLocate.attr("class", "restLocate")
                //gets text from api response for location
                restLocate.text(restaurants[i].streetAddress + ", " + restaurants[i].city + ", " + restaurants[i].state + " " + restaurants[i].zip)
                //appends location to info
                $(restInfo).append(restLocate)

                //initializes wait time p tag
                var restWait = $("<p>")
                //css targetting
                restWait.attr("class","restWait")
                //sets wait time text according to api response
                restWait.text("Wait time: "+restaurants[i].minWaitTime+" mins - "+restaurants[i].maxWaitTime+" mins")
                //appends wait time to Info
                $(restInfo).append(restWait)

                //appends Info to the nested segment
                $(nestSegment).append(restInfo)

                //appends each restaurant segment to the restaurant panel
                $("#restPanel").append(restSeg)

            }

            //captures clicks on the restaurant name
            $(document).on("click", ".restName", function (event) {
                //toggles the nested segment on each click
                $(this).next().toggle()
            })
        });
    });
});