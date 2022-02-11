import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { EmployeeService } from 'src/shared/employee.service';
@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  
 
  url = 'assets/custom/custom.js';
  loadAPI!: Promise<unknown>;



  ngOnInit(): void { 
    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
    
    
  }
  constructor(public service : EmployeeService) { }

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






