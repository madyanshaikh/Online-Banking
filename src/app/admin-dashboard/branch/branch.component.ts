import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/shared/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { AddBranchComponent } from './add-branch/add-branch.component';

export interface UserData {



}


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],

})


export class BranchComponent implements AfterViewInit {

  url = 'assets/custom/custom.js';  
  loadAPI!: Promise<unknown>;
  displayedColumns: string[] = ['id', 'name', 'address', 'contact', 'cityid', 'action'];
  dataSource: MatTableDataSource<UserData>;
  data: any = [];



  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(public service: EmployeeService,public dialog:MatDialog) {
    // Create 100 users
    this.branchData()
    // Assign the data to the data source for the table to render

    this.dataSource = new MatTableDataSource(this.data);
  }
  openDialog() {
    this.dialog.open(AddBranchComponent);
  }
  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });

   
  }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  branchData() {

    this.service.getBranches().subscribe(res => {

      this.data = res;
      console.log(res)
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



