import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/employee.service';
import { HrComponent } from '../hr/hr.component';
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
 
  constructor(public service: EmployeeService) { }


  ngOnInit(): void {

     this.service.getDepartsEmployee();
  }
}



