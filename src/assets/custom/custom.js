
<<<<<<< HEAD

$( document ).ready(function() {
//    ---------------------------------Eye Paswword---------------------
    $("#show_hide_password a").click(function(event) {

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
    
  
=======
// --------------------------JAVASCRIPT--------------------------

 function displaynone(){
    document.getElementById("hide-me").style.display="none";
 }

// -------------------------------------jQuery-----------------------------------

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




});
// ------------------------------------PIE-CHART--------------------------------------

var xValues = ["Satisfaction", "Revenue", "Complaints", "Loss", "Sales","Loan"];
var yValues = [55, 49, 44, 24, 15,35];
var barColors = ["#177e89","#084c61","#db3a34","#ffc857","#8D99AE","#566573"];
new Chart("myChart", {
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
  var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ['wahaj', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// -----------------------------Bars-charts-----------------------------------

var xValues = ["Satisfaction","Revenue","Complaints","Loss","Sales","Loan"];
var yValues = [55,49,44,47,45,39];
var barColors = ['#22223B','#4A4E69','#9A8C98','#C9ADA7','#F2E9E4','#566573'];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Muslim Bank Summary 2021"
    }
  }
});

// ----------------------------------------------------------DONUT-CHART-----------------------------------------


var xValues = ["Satisfaction","Revenue","Complaints","Loss","Sales","Loan"];
var yValues = [55,49,44,47,45,39];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Muslim bank Summary 2021"
    }
  }
});
// ----------------------------------------MULTIPLE-LINES--------------------
var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "#03071E",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "#370617",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "#6A040F",
      fill: false
    }
    ,{
      data: [3200,7100,700,5000,1600,4100,2000,1100,2050,2900],
      borderColor: "#9D0208",
      fill: false
    }
    ,{
      data: [3000,750,2200,5600,600,1000,2200,1900,1200,1800],
      borderColor: "#D00000",
      fill: false
    }
    ,{
      data: [3300,7700,2020,5050,1000,4400,2200,1100,2500,1600],
      borderColor: "#DC2F02",
      fill: false
    }
    ,{
      data: [1200,1700,1020,6050,6000,5400,1200,2100,4500,2600],
      borderColor: "#E85D04",
      fill: false
    }

    ,{
      data: [2500,4200,5010,3080,1200,4800,2900,1300,2100,1800],
      borderColor: "#F48C06",
      fill: false
    }

    ,{
      data: [1110,7777,2222,5555,1555,4321,2123,1223,2213,1846],
      borderColor: "#FAA307",
      fill: false
    }

    ,{
      data: [2196,7840,2252,5916,1000,4555,9315,1511,2981,1254],
      borderColor: "#FFBA08",
      fill: false
    }


  ]
  },
  options: {
    legend: {display: false}
  }
>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86
});
