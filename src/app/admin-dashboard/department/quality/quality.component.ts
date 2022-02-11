import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/employee.service';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent implements OnInit {

  constructor(public service : EmployeeService) { }

  ngOnInit(): void {
    this.service.getDepartsEmployee();
  }

}
