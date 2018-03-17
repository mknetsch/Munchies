$(function () {

    $("#submit").click(function () {

        var queryURL = "https://api.eatstreet.com/publicapi/v1/restaurant/search-test?access-token={c57e472ad5d59fb4}?method=delivery";

       

        var streetAddress = $("#userStreet").val().trim();

        queryURL = queryURL + streetAddress

        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    });
});