import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { MatSidenav } from '@angular/material/sidenav';

>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
<<<<<<< HEAD

export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  
    
  }
=======

export class AdminDashboardComponent implements OnInit {
  
 
  
  url = 'assets/custom/custom.js';
  loadAPI: Promise<unknown> | undefined;
  
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

  

  
>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86

 }




