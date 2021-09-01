

$(document).ready(function(){
  $(".show-login-user").click(function(){
    $(".check-append-user").empty().append("<input type='checkbox' id='switch'/><label for='switch'></label>");
    $(".check-append-admin").empty();
    
    $(".btn-u").show();
    $(".btn-m").addClass("d-none");
    $(".btn-a").hide();
    $("#login-color-change-user").empty().append("<i class='fas fa-user-lock'></i>")
    $("#login-color-change-user").addClass("for-user")
    $("#login-color-change").removeClass("for-admin")
    $("#btn-option").empty().append("<span>Login</span>").fadeIn("slow");
    $(this).children().css("color","white !important");
    $(this).parent().siblings().children().removeClass("bg-change-admin")
    $(this).addClass("bg-change-user")
    $(".hide-welcome-text").addClass("fade-drop");
    $(".ani-login").css("display","flex");
    $(".ani-login-admin").css("display","none");
    $(".for-user").css("display","block");
    $(".for-admin").css("display","none");
    $("#login-color-change").addClass("ani-login")
    
  });


  $("#btn-option").click(function(){
    $("#show-option").css("display","flex");

  });
  $(".show-login-admin").click(function(){
    $(".check-append-admin").empty().append("<input type='checkbox' id='switch'/><label for='switch'></label>");
    $(".check-append-user").empty();
    $(".btn-m").addClass("d-none");
    $(".btn-u").hide();
    $(".btn-a").show();
    $("#login-color-change").addClass("for-admin")
    $("#login-color-change-user").removeClass("for-user")
    $("#login-color-change").empty().append("<i class='fas fa-user-shield'></i>")
    // $(this).children().css("color","white!important");
    $(this).addClass("bg-change-admin")
    $(this).parent().siblings().children().removeClass("bg-change-user")
    $(".hide-welcome-text").addClass("fade-drop");
    $(".ani-login-admin").css("display","flex");
    $(".ani-login").css("display","none");
    $(".for-admin").css("display","block");
    $(".for-user").css("display","none");
    $("#btn-option").empty().append("<span>Login</span>").fadeIn("slow");


  });

});

