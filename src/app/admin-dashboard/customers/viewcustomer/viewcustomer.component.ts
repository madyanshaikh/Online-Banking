import { Component, OnInit } from '@angular/core';
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { customerForm } from 'src/shared/add-employee.model';
import { EmployeeService } from 'src/shared/employee.service';


/** Constants used to fill up our data base. */


/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewCustomerComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','firstName','lastName','age','contact','accountId','cityId','action'];
  list: any;
 
  
  constructor(public service: EmployeeService,public router :Router,private r:ActivatedRoute) { }
 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.list.paginator = this.paginator;
  }

  ngOnInit() {
    this.getList();
  }

  updateData(records: customerForm) {
    this.service.customer= Object.assign({},records);
    
  }
  goAddCustomer(){
    this.router.navigate(['../addcustomer'], { relativeTo: this.r });
    // this.router.navigate(['../add']);
    }


  onDelete(id: number) {
    this.service.deleteCustomer(id).subscribe(
      res => {
        this.service.getList();
      },
      err => {
        console.log(err);
    });
    
    
  }
  
  getList(){
    this.service.getCustomer().subscribe(
      res => {

        this.list = res 
        console.log(res)
      
        
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
