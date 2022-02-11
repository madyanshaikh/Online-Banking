import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/employee.service';


@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  

  constructor(public service:EmployeeService) { }

  ngOnInit(): void {
    this.service.getDepartsEmployee();
  }
  
  
}
