import { Component, OnInit } from '@angular/core';
declare const feather: any;
@Component({
  selector: 'app-beneficiary-management',
  templateUrl: './beneficiary-management.component.html',
  styleUrls: ['./beneficiary-management.component.css']
})
export class BeneficiaryManagementComponent implements OnInit {
  url = 'assets/js/myAccountList.js';
  loadAPI: Promise<any> | undefined;
  constructor() { }
  

  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
    feather.replace();
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
