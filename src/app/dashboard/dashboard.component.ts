import { Identifiers } from '@angular/compiler';
import { Component, OnInit, Query, } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare const feather: any;
declare const myActive: any;
declare const togleBar: any;





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})

export class DashboardComponent implements OnInit {
  url = 'assets/js/myActive.js';
  urlOne = 'assets/js/myAccountList.js';
  constructor(private router: Router) {
    
   }
   
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
    node.src = this.url, this.urlOne;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  btnClick = () => {
    this.router.navigateByUrl('/login-form');
};
newClick = () => {
  this.router.navigateByUrl('/user-dashboard/Password');
};

 
}
