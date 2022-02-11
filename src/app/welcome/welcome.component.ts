import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  btnClick: boolean = false;
  navigate: any;

  url = './assets/my-jquery/my-jquery.js';
  loadAPI!: Promise<unknown>;

  constructor(private snackbar: MatSnackBar, private router: Router) { }
  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
  }

  
btnClickFunction(){
  this.btnClick = true;
}




  hide: boolean = true;

  

  username = ''
  password = ''
  adminname = ''
  adminpassword = ''



  



  onlogin_user() {


  if (this.username == 'user' && this.password == 'user') {
      sessionStorage.setItem("isLogedIn", "true")
      this.router.navigate(['user-dashboard'])
    }
    else {
      this.snackbar.open("Invalid Username Or Password", "okay", { duration: 3000 })
    }

  }
  onlogin_admin() {

  if (this.adminname == 'admin' && this.adminpassword == 'admin') {
      sessionStorage.setItem("isLogedIn", "true")
      this.router.navigate(['admin-dashboard/home'])
    }
    else {
      this.snackbar.open("Invalid Admin name Or Password", "okay", { duration: 3000 })
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



