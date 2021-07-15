

$( document ).ready(function() {
   
    $("#show_hide_password a").click(function (event) {

        event.preventDefault();
        if ($("#show_hide_password input").attr("type") == "text") {
            $("#show_hide_password input").attr("type", "password");
            $("#show_hide_password i").addClass("fa-eye-slash");
            $("#show_hide_password i").removeClass("fa-eye");
        } else if ($("#show_hide_password input").attr("type") == "password") {
            $("#show_hide_password input").attr("type", "text");
            $("#show_hide_password i").removeClass("fa-eye-slash");
            $("#show_hide_password i").addClass("fa-eye");
        }
    });


    $(".hover-only").on("mouseenter", function () {
        $("i", this).css("color", "slategray");
        $(".cl", this).css({ "padding-left": "45PX", "color": "white" });

    });

    $(".hover-only").on("mouseleave", function () {
        $("i", this).css("color", "lightgray");
        $(".cl", this).css({ "padding-left": "16px", "color": "slategrey" });
    });
    $(".sidenav-btn").click(function () {

        $(".main-toggle").toggleClass("slide-left", "slow");
        $(".dnone").toggleClass("d-none", "slow")

    });

    
  
});
