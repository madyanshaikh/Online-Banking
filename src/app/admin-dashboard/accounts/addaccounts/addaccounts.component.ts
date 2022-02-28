import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/employee.service';

@Component({
  selector: 'app-addaccounts',
  templateUrl: './addaccounts.component.html',
  styleUrls: ['./addaccounts.component.css']
})
export class AddaccountsComponent implements OnInit {
  data: any=[];
  
userId :any;  
  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    // this.getById(this.data.id);


  }

  getById(id:number) {

    this.service.getIdCustomer(id).subscribe(res => {

      this.data = res;
        id = this.userId;
        console.log(res)
    },
    err => { console.log(err); });






  }

    clickme(){
      console.log(this.userId);

    }
}

