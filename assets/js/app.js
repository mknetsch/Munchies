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
        var ageImput = $(".birthday").val().trim();
        var birthday = moment(ageImput, "MM/DD/YYYY");
        var age = Math.abs(moment(birthday).diff(moment(), "years"));
        console.log(age);
        console.log(moment(birthday).fromNow());

        if (age >= 21) {
            $(".actions").html("<div class='ui approve button'>Enter</div>")
        }
        else if (age < 21) {
            $(".actions").html('<div class="ui button"> <a href="https://www.youtube.com/watch?v=NAfQsn4i0gM">Exit Site</div>')

        }
        else { 
            $('.retry').html("Invalid date. Try again.");
        };
    });
})
//   End Age Check Modal