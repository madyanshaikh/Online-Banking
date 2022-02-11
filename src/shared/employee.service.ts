import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEmployee } from './add-employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  departs: any;
  

  constructor(private http: HttpClient) { }

  readonly apiUrl = 'http://localhost:5163/api/Employee'
  readonly dashUrl = 'http://localhost:5163/api/'
  formData: AddEmployee = new AddEmployee();
  list: AddEmployee[];


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
  getLastTen(){
    return this.http.get(this.dashUrl+ "Customers/getLast10");
  }

  getDepartsEmployee(){
    return this.http.get(this.dashUrl+"Departments/getDepartsEmployee").subscribe(res=>{
      this.departs = res;
      console.log(res)
      
    });
      
  
  }


}