import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor() { }

  url = 'assets/js/myActive.js';
  loadAPI: Promise<any> | undefined;

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
