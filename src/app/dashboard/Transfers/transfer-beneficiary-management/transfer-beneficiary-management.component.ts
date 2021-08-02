import { Component, OnInit } from '@angular/core';
declare const feather: any;
@Component({
  selector: 'app-transfer-beneficiary-management',
  templateUrl: './transfer-beneficiary-management.component.html',
  styleUrls: ['./transfer-beneficiary-management.component.css']
})
export class TransferBeneficiaryManagementComponent implements OnInit {
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
