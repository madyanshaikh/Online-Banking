import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-admin-login',
  templateUrl: './user-admin-login.component.html',
  styleUrls: ['./user-admin-login.component.css']
})
export class UserAdminLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  welcome(){
 
    sessionStorage.setItem("isLogedIn", "true")
    this.router.navigate(['login-form'])
  }
}
