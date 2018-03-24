$(function () {

    // Age Check Modal
    function modals() {
        $('.ui.modal')
            .modal('setting', 'closable', false)
            .modal('show')
            ;
    };
    modals();
   

    $(".ui.button").on("click", function () {
        var ageInput = $(".birthday").val().trim();
        var inputLength = $(".birthday").val().length;
        console.log(inputLength);
        if (inputLength >= 8){
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
        }
        else if ((age < 21) && (age > 0)) {
            $(".actions").html('<div class="ui button"> <a href="https://www.youtube.com/watch?v=NAfQsn4i0gM">Exit Site</div>')
            $('.retry').html("You are not old enough")
        }
        else { 
            $('.retry').html("Invalid date, try again");
        };
    });
})
//   End Age Check Modal