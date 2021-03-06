import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/employee.service';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ItComponent implements OnInit {

  constructor(public service : EmployeeService) { }

  ngOnInit(): void {
    this.service.getDepartsEmployee();
  }

}
