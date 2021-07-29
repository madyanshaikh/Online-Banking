$( document ).ready(function(){
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
});
var ctx = document.getElementById('myChart').getContext('2d');
var xValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
var yValues = [55, 49, 44, 24, 15,35,50];
var barColors = ["#177e89","#084c61","#db3a34","#ffc857","#8D99AE","#566573","#74b8b8"];
new Chart(ctx, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues }]
    },
    options: {
      title: {
        display: true,
        text:"Muslim Bank Summary 2021"
      }
    },
    
  });
  
  