import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { cardsdashboard } from 'src/shared/add-employee.model';
// import { AddEmployee, cardsdashboard } from 'src/shared/add-employee.model';
import { EmployeeService } from 'src/shared/employee.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url = 'assets/custom/custom.js';
  loadAPI!: Promise<unknown>;

  pie: any;
  chart: any = [];
  cards: any;

  data: any = { employee: 0, customer: 0, complaint: 0, department: 0 }
  ten: any;
  constructor(public service: EmployeeService) { }





  ngOnInit(): void {

    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
    this.getcards();

    this.loadChart();
    this.newAddedCustomer();



  }
  newAddedCustomer(){
    this.service.getLastTen().subscribe(res=>{
      this.ten = res
    })
  }

  getcards() {
    this.service.getChart().subscribe(
      res => {
        this.cards = res
        

      })
      
  }

  loadChart() {

    this.service.getChart().subscribe(res => {

      this.pie = res as any

      this.pieChart(this.pie)
      this.barChart(this.pie)
      this.polarAreaChart(this.pie)
      this.radarChart(this.pie)

    });


  }

  pieChart(pie: any) {

    this.chart = new Chart('myChart-pie', {

      type: 'pie',
      data: {
        labels: ["Employee", "Department", "Comapliant", "Customer", "Branch", "city"],
        datasets: [{
          backgroundColor: ["#177e89", "#084c61", "#db3a34", "#ffc857", "#8D99AE", "#566573"],
          data: [pie.employee, pie.department, pie.complaint, pie.customer, pie.branch, pie.city],

        }]

      },
      options: {

        hover: {

          animationDuration: 0.30 // duration of animations when hovering an item
        },

        responsiveAnimationDuration: 0.50, // animation duration after a resize
        elements: {
          line: {
            tension: 0 // disables bezier curves
          }
        }
      }



    });
  }
  barChart(pie: any) {

    this.chart = new Chart('myChart1', {

      type: 'bar',
      data: {
        labels: ["Employee", "Department", "Comapliant", "Customer", "Branch", "city"],
        datasets: [{
          backgroundColor: [
            "#9BD1AB",
            "#54ABAB",
            "#212854",
            "#FF5151",
            "#FF9B6A",
            "#FFEF99",],
          data: [pie.employee, pie.department, pie.complaint, pie.customer, pie.branch, pie.city],

        }]

      },
      options: {
        legend: { display: true },
        plugins: {
          deferred: {
            delay: 10000,
            hover: true
          },
        },
        title: {
          display: true,
          text: "Muslim Bank Summary 2021"
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 1,
              max: 10

            }
          }]
        }
      }



    });
  }
  polarAreaChart(pie: any) {

    this.chart = new Chart('myChart2', {

      type: 'polarArea',
      data: {
        labels: ["Employee", "Department", "Comapliant", "Customer", "Branch", "city"],
        datasets: [{
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ],

          data: [pie.employee, pie.department, pie.complaint, pie.customer, pie.branch, pie.city],

        }]

      },
      options: {

        hover: {

          animationDuration: 0.30 // duration of animations when hovering an item
        },

        responsiveAnimationDuration: 0.50, // animation duration after a resize
        elements: {
          line: {
            tension: 0 // disables bezier curves
          }
        }
      }



    });
  }
  radarChart(pie: any) {

    this.chart = new Chart('myChart3', {

      type: 'radar',
      data: {
        labels: ["Employee", "Department", "Comapliant", "Customer", "Branch", "city"],
        datasets: [{
          label: 'Muslim Bank',
          data: [pie.employee, pie.department, pie.complaint, pie.customer, pie.branch, pie.city],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          data: [5, 8, 6, 8, 9, 7, 3],
          label: 'Bank Scale',
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]

      },
      options: {

        hover: {

          animationDuration: 0.30 // duration of animations when hovering an item
        },

        responsiveAnimationDuration: 0.50, // animation duration after a resize
        elements: {
          line: {
            tension: 0 // disables bezier curves
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 1,
              max: 10

            }
          }]
        }




      }
    });
  }
  public loadScript() {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }




}


