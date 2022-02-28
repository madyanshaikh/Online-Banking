import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/shared/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/shared/add-employee.model';
import { Router, RouterLink, RouterModule } from '@angular/router';

export interface UserData {



}


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],

})


export class BranchComponent implements AfterViewInit {

 
  displayedColumns: string[] = ['id', 'name', 'address', 'contact', 'cityid', 'action'];
  dataSource: MatTableDataSource<UserData>;
  data: any = [];



  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(public service: EmployeeService,public dialog:MatDialog ,public toastr:ToastrService,public router:Router) {
    // Create 100 users
    this.service.getBranches();
    // Assign the data to the data source for the table to render

    this.dataSource = new MatTableDataSource(this.data);
  }
  openDialog() {
    this.dialog.open(AddBranchComponent);
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

updateBranches(records:Branch){
  this.service.branchData = Object.assign({},records);
}
goAdd(){
  this.router.navigate(['add-branch']);
  // this.router.navigate(['../add']);
  }


  onDeletes(id:number){

    this.service.deleteBranch(id).subscribe(res=>{

      this.service.getBranches();
      this.toastr.success("Successfully Deleted");
    }
    ,err => {
      console.log(err);
      this.toastr.error("Something Went Wrong Try Again");
    });

    

  }
}



