import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/shared/employee.service';
import { Branch } from 'src/shared/add-employee.model';
@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  

  constructor(public service:EmployeeService) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm){

    this.service.postBranches().subscribe(res=> {

      this.service.branchData = new Branch(); 
      form.form.reset();

    });

  }

}
