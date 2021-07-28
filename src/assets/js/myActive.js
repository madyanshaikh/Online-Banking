$( document ).ready(function() {
//===================List Active Code==================//
$(function myActiveBtn(){
    $('.sidebar-nav').on('click', 'li', function() {
        $('.sidebar-nav li.active').removeClass('active');
        $(this).addClass('active');
    });
});

//======================SideBar Toggle Code====================//

$(function simpleBar() {
    (document.getElementsByClassName("js-simplebar")[0]);
  
    $(".sidebar-toggle").on("click", function() {
      $(".sidebar")
        .toggleClass("collapsed")
        .one("transitionend", function() {
          setTimeout(function() {
            window.dispatchEvent(new Event("resize"));
          }, 100);
        });
    });
  });

  //============================Account List Pagination======================//

  

    $('#myTable,#mySecondTable').dataTable({
      stateSave: true,
      "bDestroy": true,
      "bLengthChange": false,
      "pagingType": "simple",
      pageLength : 5,
      "bInfo" : false,
      "searching": false,
      pageLength : 5,
    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
      language: {
        paginate: {
          next: '<i class="fas fa-chevron-right"></i>,',
          previous: '<i class="fas fa-chevron-left"></i>' 
        }
      }
    
    });
    $('#mySecondTable').dataTable({
      stateSave: true,
      "bDestroy": true,
      "bLengthChange": false,
      "pagingType": "simple",
      pageLength : 5,
      "bInfo" : false,
      "searching": false,
      pageLength : 5,
    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
      language: {
        paginate: {
          next: '<i class="fas fa-chevron-right"></i>,',
          previous: '<i class="fas fa-chevron-left"></i>' 
        }
      }
    
    });
  });
  