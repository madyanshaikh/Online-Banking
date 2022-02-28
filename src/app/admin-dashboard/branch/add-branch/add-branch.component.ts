import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/shared/employee.service';
import { Branch } from 'src/shared/add-employee.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BranchComponent } from "../branch.component";
@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  city = {
    karachi: 1001,
    lahore: 1006,
    islamabad: 1011,
    faisalabad: 1021, muree: 6021, rawalpindi: 6026
  }


  constructor(public service: EmployeeService, public toaster: ToastrService) { }

  ngOnInit(): void {
  }



  onSubmit(form:NgForm) {

    if (this.service.branchData.id == null) {


      this.postbranches(form);
    }
    else {
      this.updateBranches(form);
    }

  }


  postbranches(form: NgForm) {

    this.service.postBranches().subscribe(res => {
      this.service.branchData = new Branch();
      form.form.reset();
      this.showSuccess();
      this.service.getBranches();
    },
      err => {
        console.log(err)

      });
  }

  updateBranches(form: NgForm) {

    this.service.updateBranches().subscribe(res => {
      this.service.branchData = new Branch();
      form.form.reset();
      this.toaster.success("Branch Updated Successfuly");
      this.service.getBranches();
    },
      err => {
        console.log(err)

      });
  }

  showSuccess() {
    this.toaster.success('Branches Successfully Added');
  }

}
