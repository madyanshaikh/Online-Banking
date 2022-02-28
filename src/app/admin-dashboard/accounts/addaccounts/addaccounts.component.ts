import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/employee.service';

@Component({
  selector: 'app-addaccounts',
  templateUrl: './addaccounts.component.html',
  styleUrls: ['./addaccounts.component.css']
})
export class AddaccountsComponent implements OnInit {
  data: any;
  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    this.getById(this.data.id);


  }

  getById(id: number) {

    this.service.getCustomer().subscribe(res => {

      this.data = res;

    }
      , err => { console.log(err); });






  }
  getDimensionsByFind(id: any) {
    return this.data.find((res: any) => {
      this.data.id === id;
    });
  }

    
}

