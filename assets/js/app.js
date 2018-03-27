$(function () {

// CORS Bypass
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
 });

    // checks local storage to see if the user is over 21. if not then it runs the age checker modal.
    var locAge = localStorage.getItem('age');
    if (locAge >= 21) {

    } else {
        // Age Check Modal
        function modals() {
            $('.ui.modal')
                .modal('setting', 'closable', false)
                .modal('show')
                ;
        };
        modals();
    }
    // runs the age check when enter button is hit
    $('.ui.modal').keypress(function (e) {
        if (e.which == 13) {
            // takes the value of the input
            var ageInput = $(".birthday").val().trim();
            var inputLength = $(".birthday").val().length;
            console.log(inputLength);
            localStorage.setItem("age", age);
            // checks to make sure the date entered is the proper length
            if (inputLength >= 8) {
                // calculates the age from the date entered
                var birthday = moment(ageInput, "MM/DD/YYYY");
                var age = (moment(birthday).diff(moment(), "years") * -1);
                console.log(age);
                console.log(moment(birthday).fromNow());
            }
            else {
                $('.retry').html("Invalid date, try again");
            };
            if (age >= 21) {
                $(".actions").html("<div class='ui approve button'>Enter</div>")
                $(".retry").html("Proceed")
                $('#content-page').css('background-color', 'green');
            }
            else if ((age < 21) && (age > 0)) {
                $(".actions").html('<div class="ui button"> <a href="https://www.youtube.com/watch?v=NAfQsn4i0gM">Exit Site</div>')
                $('.retry').html("You are not old enough")
                $('#content-page').css('background-color', 'red')
            }
            else {
                $('.retry').html("Invalid date, try again");
                $('#content-page').css('background-color', 'red')
            };
        };
    })

    // runs the age check when button is clicked, does the same thing as when the enter button is hit
    $(".ui.button").on("click", function () {
        var ageInput = $(".birthday").val().trim();
        var inputLength = $(".birthday").val().length;
        console.log(inputLength);
        if (inputLength >= 8) {
            var birthday = moment(ageInput, "MM/DD/YYYY");
            var age = (moment(birthday).diff(moment(), "years") * -1);
            localStorage.setItem("age", age);
            console.log(age);
            console.log(moment(birthday).fromNow());
        }
        else {
            $('.retry').html("Invalid date, try again");
            $('#content-page').css('background-color', 'red')
        };
        if (age >= 21) {
            $(".actions").html("<div class='ui approve button'>Enter</div>");
            $(".retry").html("Proceed");
            $('#content-page').css('background-color', 'green');
        }
        else if ((age < 21) && (age > 0)) {
            $(".actions").html('<div class="ui button"> <a href="https://www.youtube.com/watch?v=NAfQsn4i0gM">Exit Site</div>')
            $('.retry').html("You are not old enough");
            $('#content-page').css('background-color', 'red');
        }
        else {
            $('.retry').html("Invalid date, try again");
            $('#content-page').css('background-color', 'red');
        };
    });
})

//   End Age Check Modal