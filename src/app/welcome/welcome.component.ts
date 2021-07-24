import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

<<<<<<< HEAD
=======



>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  navigate: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
welcome(){
<<<<<<< HEAD
  sessionStorage.setItem("isLogedIn", "true")
  this.router.navigate(['login-form'])
}
=======
 
  sessionStorage.setItem("isLogedIn", "true")
  this.router.navigate(['login-form'])
}

>>>>>>> 7050222b9718aa437fa9f6b37b1b12b3029c5d86
}
