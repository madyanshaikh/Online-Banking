import { Identifiers } from '@angular/compiler';
import { Component, OnInit, Query, } from '@angular/core';
declare var $: any;
declare const feather: any;
declare const myActive: any;
declare const togleBar: any;





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): any {
   
    feather.replace();
    myActive.myActiveBtn();
    togleBar.simpleBar();

  }
 
}
