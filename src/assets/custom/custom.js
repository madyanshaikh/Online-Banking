

$( document ).ready(function() {
//    ---------------------------------Eye Paswword---------------------
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


// ---------------------------side nav -------------------------------

    $(".hover-only").on("mouseenter", function () {
        $("i", this).css("color", "mintcream");
        $(".cl", this).css({ "padding-left": "45PX", "color": "white" });

    });

    $(".hover-only").on("mouseleave", function () {
        $("i", this).css("color", "skyblue");
        $(".cl", this).css({ "padding-left": "16px", "color": "slategrey" });
    });
    $(".sidenav-btn").click(function () {

        $(".main-toggle").toggleClass("slide-left", "slow");
        $(".dnone").toggleClass("d-none", "slow")

    });


    // ------------------table--------------------
    
    $(".tbl,.tbl1,.tbl2,.tbl3").hide();

    $(".dprt").click(function(){

        
        $(".tbl").toggle("slow");
    })
    $(".dprt1").click(function(){

        
        $(".tbl1").toggle("slow");
    })
    $(".dprt2").click(function(){

        
        $(".tbl2").toggle("slow");
    })
    $(".dprt3").click(function(){

        
        $(".tbl3").toggle("slow");
    })
    
  
});
