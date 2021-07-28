import { Component, OnInit,HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
<<<<<<< HEAD

=======
>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})
export class LoginFormComponent implements OnInit {
<<<<<<< HEAD
  isCollapsed: boolean = false;
  hide:boolean = true;
=======
<<<<<<< HEAD
  
  url = 'assets/custom/custom.js';
  loadAPI: Promise<unknown> | undefined;
=======
>>>>>>> 452435e1d4ffa3f114e619249a2261180d9ff1c1

  Opened:boolean = false;
  desktopViewWidth: number = 700;
 

  ngOnInit(): void {
    
    this.onResize(window.innerWidth);
   }
   

  username = ''
  password = ''
>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86

  ngOnInit(): void {

    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
  }
  
  constructor(private snackbar: MatSnackBar, private router: Router) { }

<<<<<<< HEAD

=======
<<<<<<< HEAD
  
  
  
  username = ""
  password = ""

  onlogin() {

    if (this.username == 'admin' && this.password == 'admin') {
      sessionStorage.setItem("isLogedIn", "true");
      this.router.navigate(['admin-dashboard']);
    }

    else if (this.username == '' && this.password == '') {
      sessionStorage.setItem("isLogedIn", "true");
      this.router.navigate(['user-dashboard']);
    }
    else {
      this.snackbar.open("Invalid Username Or Password", "okay", { duration: 3000 })
    }

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
// function showpass() {
//   throw new Error('Function not implemented.');
// }
=======
  public loadScript() {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
>>>>>>> 452435e1d4ffa3f114e619249a2261180d9ff1c1

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

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.Opened = width >= this.desktopViewWidth;
  }
  
}
<<<<<<< HEAD

=======
function showpass() {
  throw new Error('Function not implemented.');
}
>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86
>>>>>>> 452435e1d4ffa3f114e619249a2261180d9ff1c1

