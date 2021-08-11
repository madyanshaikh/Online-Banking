
// --------------------------JAVASCRIPT--------------------------



function displaynone() {
  document.getElementById("hide-me").style.display = "none";
}


// -------------------------------------jQuery-----------------------------------
;
// ------------------------------------PIE-CHART--------------------------------------

var xValues = ["Satisfaction", "Revenue", "Complaints", "Loss", "Sales", "Loan"];
var yValues = [55, 49, 44, 24, 15, 35];
var barColors = ["#177e89", "#084c61", "#db3a34", "#ffc857", "#8D99AE", "#566573"];
new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      deferred: {
        delay: 10000,
      },
    },
    title: {
      display: true,
      text: "Muslim Bank Summary 2021"
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

var xValues = ["Satisfaction", "Revenue", "Complaints", "Loss", "Sales", "Loan"];
var yValues = [55, 49, 44, 47, 45, 39];
var barColors = [
  "#AAAAAA",
  "#A4EBF3",
  "#CCF2F4",
  "#F4F9F9",
  "#AAAAAA",
  "#A4EBF3",
];

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
    legend: { display: false },
    plugins: {
      deferred: {
        delay: 10000,
      },
    },
    title: {
      display: true,
      text: "Muslim Bank Summary 2021"
    }
  }
});

// ----------------------------------------------------------DONUT-CHART-----------------------------------------


var xValues = ["Satisfaction", "Revenue", "Complaints", "Loss", "Sales", "Loan"];
var yValues = [55, 49, 44, 47, 45, 39];
var barColors = [
  "#AAAAAA",
  "#A4EBF3",
  "#CCF2F4",
  "#F4F9F9",
  "#AAAAAA"
];

new Chart("myChart4", {
  type: "doghnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      deferred: {
        delay: 10000,
      },
    },
    title: {
      display: true,
      text: "Muslim bank Summary 2021"
    }
  }
});
// ----------------------------------------MULTIPLE-LINES--------------------
var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{





      data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
      borderColor: 'rgb(255, 99, 132)',
      fill: false
    }, {
      data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
      borderColor: 'rgb(75, 192, 192)',
      fill: false
    }, {
      data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
      borderColor: 'rgb(255, 205, 86)',
      fill: false
    }
      , {
      data: [3200, 7100, 700, 5000, 1600, 4100, 2000, 1100, 2050, 2900],
      borderColor: 'rgb(201, 203, 207)',
      fill: false
    }
      , {
      data: [3000, 750, 2200, 5600, 600, 1000, 2200, 1900, 1200, 1800],
      borderColor: 'rgb(54, 162, 235)',
      fill: false
    }
      , {
      data: [3300, 7700, 2020, 5050, 1000, 4400, 2200, 1100, 2500, 1600],
      borderColor: "#DC2F02",
      fill: false
    }
      , {
      data: [1200, 1700, 1020, 6050, 6000, 5400, 1200, 2100, 4500, 2600],
      borderColor: 'rgb(54, 162, 235)',
      fill: false
    }

      , {
      data: [2500, 4200, 5010, 3080, 1200, 4800, 2900, 1300, 2100, 1800],
      borderColor: "#F48C06",
      fill: false
    }




    ]
  },
  options: {
    legend: { display: false },
    plugins: {
      deferred: {
        delay: 10000,
      },
    },
  }
});



var data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14,
      12
    ],
    backgroundColor: [
      '#ef476f',
      '#ffd166',
      '#06d6a0',
      '#118ab2',
      '#073b4c',
      '#E8ECF1',

    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    "Red",
    "Green",
    "Yellow",
    "Grey",
    "Blue"
  ],
  options: {
    plugins: {
      deferred: {
        delay: 10000,
      },
    },
  }
};
new Chart("myChart2", {
  data: data,
  type: 'polarArea'

});