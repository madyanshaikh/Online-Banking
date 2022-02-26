import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/shared/employee.service';
import { LoginModel } from 'src/shared/add-employee.model';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  btnClick: boolean = false;
  navigate: any;
  hide: boolean = true;
  formModel = {
    userName: '', password: ''
  }
  UserName = ''
  Password = ''
  adminname = ''
  adminpassword = ''
  url = './assets/my-jquery/my-jquery.js';
  loadAPI!: Promise<unknown>;

  constructor(private snackbar: MatSnackBar,public toastr:ToastrService, private router: Router, public service: EmployeeService) { }

  ngOnInit(): void {

    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();

    });
 
      



  
  }

  btnClickFunction() {
    this.btnClick = true;
  }

  onlogin_user() {


    if (this.UserName == 'user' && this.Password == 'user') {
      sessionStorage.setItem("isLogedIn", "true")
      this.router.navigate(['user-dashboard'])
    }
    else {
      this.snackbar.open("Invalid Username Or Password", "okay", { duration: 3000 })
    }

  }


  onlogin_admin(form: NgForm) {
    this.service.loginEmployee(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('admin-dashboard/home');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);

      }
    )




  }

  public loadScript() {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }


}



