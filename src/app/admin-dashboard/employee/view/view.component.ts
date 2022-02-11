import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEmployee } from 'src/shared/add-employee.model';
import { EmployeeService } from 'src/shared/employee.service';
import { __assign } from 'tslib';
import { ActivatedRoute, Router } from '@angular/router';






@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


export class ViewComponent implements OnInit {
  displayedColumns: string[] = ['id','firstName','lastName','salary','contact','dob','department','action'];
  list: any;
  
  constructor(public service: EmployeeService,public router :Router,private r:ActivatedRoute) { }
 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.list.paginator = this.paginator;
  }

  ngOnInit() {
    this.getEmployee();
  }

  updateData(records: AddEmployee) {
    this.service.formData= Object.assign({},records);
    
  }
  goAdd(){
    this.router.navigate(['../add'], { relativeTo: this.r });
    // this.router.navigate(['../add']);
    }


  onDelete(id: number) {
    this.service.deleteEmployee(id).subscribe(
      res => {
        this.service.getList();
      },
      err => {
        console.log(err);
    });
    
    
  }
  
  getEmployee(){
    this.service.getList().subscribe(
      res => {

        this.list = res 
        
      }
     
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.list.filter = filterValue.trim().toLowerCase();

    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
  }
}


