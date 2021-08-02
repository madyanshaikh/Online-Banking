$(document).ready(function(){

    var ctr = document.getElementById('myTry').getContext('2d');
  var myChart = new Chart(ctr, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: '# of Votes',
        data: [1000, 4000, 700, 2000, 3500, 10000, 6000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(document.getElementById("myChart"), {
    type: 'line',
    data: {
      labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      datasets: [{ 
          data: [860,1140,1060,1060,1070,1110,1330],
          label: "Account",
          borderColor: "#3e95cd",
          fill: false
          
        }, { 
          data: [2820,3500,411,5002,6350,8090,9470],
          label: "Debit Card",
          borderColor: "#8e5ea2",
          fill: false
          
        }, { 
          data: [1680,1700,1780,1900,2030,2760,4080],
          label: "Credit Card",
          borderColor: "#3cba9f",
          fill: false
        }, 
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Account/Debit-Card/Credit-Card Movement Graph'
      }
    }
  });
    
});