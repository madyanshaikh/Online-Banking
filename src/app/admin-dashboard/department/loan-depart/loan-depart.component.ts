import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/employee.service';

@Component({
  selector: 'app-loan-depart',
  templateUrl: './loan-depart.component.html',
  styleUrls: ['./loan-depart.component.css']
})
export class LoanDepartComponent implements OnInit {

  constructor(public service : EmployeeService) { }

  ngOnInit(): void {
    this.service.getDepartsEmployee();
  }

}
