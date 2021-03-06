import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEmployee, Branch, customerForm, LoginModel } from './add-employee.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  departs: any;
  customer: customerForm = new customerForm();
  data: any;

  constructor(private http: HttpClient) { }

  readonly apiUrl = 'http://localhost:26870/api/Employee'
  readonly dashUrl = 'http://localhost:26870/api/'
  readonly customerUrl = 'http://localhost:26870/api/Customers'
  readonly branchUrl = 'http://localhost:26870/api/Branches'
  formData: AddEmployee = new AddEmployee();
  list: AddEmployee[];
  branchData: Branch = new Branch();
  login: LoginModel = new LoginModel();

  postEmployee() {

    return this.http.post(this.apiUrl, this.formData);
  }
  putEmployee() {
    return this.http.put(`${this.apiUrl}/${this.formData.id}`, this.formData);
  }
  deleteEmployee(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getList() {
    return this.http.get(this.apiUrl);
  }

  // --------------------- Dashboard-charts --------------------------


  getChart() {

    return this.http.get(this.dashUrl + "Dashboard/getCards")
  }

  getpie() {

    return this.http.get(this.dashUrl + "Dashboard/getCards");
  }
  getLastTen() {
    return this.http.get(this.dashUrl + "Customers/getLast10");
  }

  getDepartsEmployee() {
    return this.http.get(this.dashUrl + "Departments/getDepartsEmployee").subscribe(res => {
      this.departs = res;
      console.log(res)

    });


  }


  // ------------------Customer-----------------


  postCustomer() {

    return this.http.post(this.customerUrl, this.customer);

  }

  putCustomer() {

    return this.http.put(`${this.customerUrl}/${this.customer.id}`, this.customer);

  }

  getCustomer() {
    return this.http.get(this.customerUrl)

  }
  getIdCustomer(id:number){
  return this.http.get(`${this.customerUrl}/${id}`);
  }
  deleteCustomer(id: number) {
    return this.http.delete(`${this.customerUrl}/${id}`);
  }


  // ------------login ---------------


  loginEmployee(loginData: any) {

    return this.http.post(this.dashUrl + 'Auth/Login', loginData)
  }

  UserProfile() {
    return this.http.get(this.dashUrl + 'Auth');
  }

  // ------------Accounts ---------------
  getAccounts() {
    return this.http.get(this.dashUrl + 'Accounts/getAccounts')
  }

  // -----------------Branch------------------------

  getBranches() {
    return this.http.get(this.branchUrl).subscribe(res => {
      
      this.data = res;
      

    });
  }

  postBranches() {

    return this.http.post(this.branchUrl,this.branchData);
  }
  
  updateBranches(){

    return this.http.put(`${this.branchUrl}/${this.branchData.id}`,this.branchData);
  }

  deleteBranch(id:number){

  return this.http.delete(`${this.branchUrl}/${id}`);

  }



}




