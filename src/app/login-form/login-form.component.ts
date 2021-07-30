import { Component, OnInit,HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})
export class LoginFormComponent implements OnInit {

  isCollapsed: boolean = false;
  hide:boolean = true;
  
  url = 'assets/custom/custom.js';
  loadAPI: Promise<unknown> | undefined;

  Opened:boolean = false;
  desktopViewWidth: number = 992;
 

  ngOnInit(): void {
    
    this.onResize(window.innerWidth);
   }
   

  username = ''
  password = ''


  
  constructor(private snackbar: MatSnackBar, private router: Router) { }
  


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

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.Opened = width >= this.desktopViewWidth;
  }



}





  
