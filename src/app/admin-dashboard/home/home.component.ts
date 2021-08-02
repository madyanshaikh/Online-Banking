import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url = './assets/custom/custom.js';
  loadAPI!: Promise<unknown>;
  
  constructor() { }

  ngOnInit(): void {

    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
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
  canvas: any;
  ctx: any;

  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Current Vallue',
          data: [0, 20, 40, 50],
          backgroundColor: "rgb(115 185 243 / 65%)",
          borderColor: "#007ee7",
          fill: true,
        },
        {
          label: 'Invested Amount',
          data: [0, 20, 40, 60, 80],
          backgroundColor: "#47a0e8",
          borderColor: "#007ee7",
          fill: true,
        }],
        labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
      },
    });
  }


  
}


