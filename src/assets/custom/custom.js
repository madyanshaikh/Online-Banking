alert("java");
  

    $(document).on('ready',function() {
     alert("jquery");
        
    
        
        $('.hover-only').on('mouseenter',function () {
          $('i',this).css('color','slategray');
          $('.cl',this).css({'padding-left':'45PX','color':'white'});

        });
        $('.hover-only').on('mouseleave',function () {
          $('i',this).css('color','lightgray');
          $('.cl',this).css({'padding-left':'16px','color':'slategrey'});
        });
        $('.sidenav-btn').click(function () {
        
            $('.main-toggle').toggleClass('slide-left','slow');
            $('.dnone').toggleClass('d-none','slow')
        
        });

       
    });