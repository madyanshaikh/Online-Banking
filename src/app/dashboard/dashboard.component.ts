import { Identifiers } from '@angular/compiler';
import { Component, OnInit, Query, } from '@angular/core';
<<<<<<< HEAD
declare var $: any;
declare const feather: any;
declare const myActive: any;
declare const togleBar: any;
=======

>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

<<<<<<< HEAD
  constructor() {
    
   }
   url = 'assets/js/myActive.js';
  loadAPI: Promise<unknown> | undefined;

  ngOnInit(): any {

    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
   
    feather.replace();
    myActive.myActiveBtn();
    togleBar.simpleBar();

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

=======
  constructor() { }

  ngOnInit(): any {
    
    
>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86
 
}
}