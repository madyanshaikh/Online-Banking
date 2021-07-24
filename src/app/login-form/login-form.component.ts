import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  url = 'assets/custom/custom.js';
  loadAPI: Promise<unknown> | undefined;

  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
  }
  username = ''
  password = ''

  constructor(private snackbar: MatSnackBar, private router: Router) { }

  public loadScript() {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  onlogin() {
    this.router.navigate(['admin-dashboard']);

    // if (this.username == 'admin' && this.password == 'admin') {
    //   sessionStorage.setItem("isLogedIn", "true")
    //   this.router.navigate(['admin-dashboard'])
    // }
    // else if (this.username == 'user' && this.password == 'user') {
    //   sessionStorage.setItem("isLogedIn", "true")
    //   this.router.navigate(['user-dashboard'])
    // }
    // else {
    //   this.snackbar.open("Invalid Username Or Password", "okay", { duration: 3000 })
    // }

  }

}
function showpass() {
  throw new Error('Function not implemented.');
}

