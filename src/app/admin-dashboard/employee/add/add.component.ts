
import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../../../shared/employee.service';
import { AddEmployee } from '../../../../shared/add-employee.model';
import { ToastrService } from 'ngx-toastr';
/**
 * @title Stepper with customized states
 */

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})




export class AddComponent implements OnInit {

  qualification = { inter: 1, graduate: 2, masters: 3, phd: 4 }
  city = { karachi: 1001, lahore: 1006, islamabad: 1011, faisalabad: 1021 }
  department = { Hr: 1001, Complaint: 1002, Quality: 1003, Collection: 1004, CreditCard: 2002, Loan: 2003, iT: 2004 }
  //  genders = { male: 1, female: 0 }


  constructor(public service: EmployeeService, public toastr: ToastrService) { }


  ngOnInit() { }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == null) {

      this.postRecords(form);
    }
    else {

      this.updateRecords(form);
    }

  }

  showSuccess() {
    this.toastr.success('Successfully Added', 'Employee Registration Successfull');
  }
  showSuccessUpdate() {
    this.toastr.success('Successfully updated', 'Employee Updated Successfull');
  }
  postRecords(form: NgForm) {
    this.service.postEmployee().subscribe(
      res => {
        form.form.reset();
        this.service.formData = new AddEmployee();
        this.showSuccess();



      },
      err => {
        console.log(err)

      }
    );
  }

  updateRecords(form: NgForm) {
    this.service.putEmployee().subscribe(
      res => {
        form.form.reset();
        this.service.formData = new AddEmployee();
        this.showSuccessUpdate();



      },
      err => {
        console.log(err)

      }
    );

  }
}
