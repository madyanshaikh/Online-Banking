import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/shared/employee.service';

export interface UserData {


}
/** Constants used to fill up our data base. */

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-viewaccounts',
  templateUrl: './viewaccounts.component.html',
  styleUrls: ['./viewaccounts.component.css']
})
export class ViewaccountsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','firstName','lastName','gender','contact','account','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  data: any = [];

  constructor(public service: EmployeeService) {
    this.dataSource = new MatTableDataSource(this.data);
    this.accountsData()
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
  accountsData() {

    this.service.getAccounts().subscribe(res => {

      this.data = res
    });
  }

  /** Builds and returns a new User. */

}