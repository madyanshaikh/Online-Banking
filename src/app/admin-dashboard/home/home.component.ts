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
 

  
}


