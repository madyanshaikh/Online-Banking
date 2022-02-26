
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { EmployeeService } from 'src/shared/employee.service';
import { customerForm } from 'src/shared/add-employee.model';
import { ToastrService } from 'ngx-toastr';


/**
 * @title Stepper with customized states
 */
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class AddCustomerComponent implements OnInit {

  account = { current: 1551, saving: 1552, td: 1553, fcyAccount: 1554 }
  city = { karachi: 1001, lahore: 1006, islamabad: 1011, faisalabad: 1021 ,muree:6021,rawalpindi :6026}


  constructor(public service: EmployeeService, public toastr: ToastrService) { }

  ngOnInit() {

  }


  onSubmit(form: NgForm) {

    if (this.service.customer.id == null) {
      this.addCustomer(form);

    }
    else {
      this.updateCustomer(form);
    }
  }

  addCustomer(form: NgForm) {
    this.service.postCustomer().subscribe(
      res => {
        this.service.customer = new customerForm();
        form.form.reset();
        this.showSuccess();

      },
      err => {
        console.log(err)
      })

  }
  showSuccess() {
    this.toastr.success('Successfully Added', 'Employee Registration Successfull');
  }
  showSuccessUpdate() {
    this.toastr.success('Successfully updated', 'Employee Updated Successfull');
  }
  updateCustomer(form: NgForm) {
    this.service.putCustomer().subscribe(
      res => {
        this.service.customer = new customerForm();
        form.form.reset();
        this.showSuccessUpdate();
      });

  }

  resetform(form:NgForm){

    form.form.reset()
  }

}
