import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/employee.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(public service :EmployeeService) { }

  ngOnInit(): void {
  this.service.getDepartsEmployee();
  }

}
