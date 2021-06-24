import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username = ''
  Password = ''

  constructor(private snackbar: MatSnackBar, private router: Router) { }


  ngOnInit(): void {
  }
  onlogin() {
    if (this.username == 'admin' && this.Password == 'admin') {

      sessionStorage.setItem("isloggedin","True")
      this.router.navigate(['index1'])
    }
    else {
      this.snackbar.open("Invalid Username Or Password", "okay", { duration: 3000 })
    }

  }
}
