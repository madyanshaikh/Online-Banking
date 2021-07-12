import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  ngOnInit(): void{ }
  username = ''
  password = ''

  constructor(private snackbar: MatSnackBar,private router: Router) { }


 
  onlogin() {

    if (this.username == 'admin' && this.password == 'admin') {
      sessionStorage.setItem("isLogedIn", "true")
      this.router.navigate(['admin-dashboard'])
    }
    else if (this.username == 'user' && this.password == 'user') {
      sessionStorage.setItem("isLogedIn", "true")
      this.router.navigate(['user-dashboard'])
    }
    else {
      this.snackbar.open("Invalid Username Or Password", "okay", { duration: 3000 })
    }

  }
  
}
