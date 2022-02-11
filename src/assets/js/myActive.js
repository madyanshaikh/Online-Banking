$(document).ready(function () {
  //===================List Active Code==================//
  $(function myActiveBtn() {
    $('.sidebar-nav').on('click', 'li', function () {
      $('.sidebar-nav li.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  //  //======================SideBar Toggle Code====================//

  $(function simpleBar() {
    (document.getElementsByClassName("js-simplebar")[0]);

    $(".sidebar-toggle").on("click", function () {
      $(".sidebar")
        .toggleClass("collapsed")
        .one("transitionend", function () {
          setTimeout(function () {
            window.dispatchEvent(new Event("resize"));
          }, 100);
        });
    });
  });

  //   //============================Account List Pagination======================//



  var table = $('#myTable').DataTable({
    responsive: true,
    lengthChange: false,
    buttons: ['excel', 'pdf', 'print', { extend: 'colvis', className: 'btn btn-danger' }]
  });

  table.buttons().container()
    .appendTo('#myTable_wrapper .col-md-6:eq(0)');



});




