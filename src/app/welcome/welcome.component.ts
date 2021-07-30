import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




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
 
  sessionStorage.setItem("isLogedIn", "true")
  this.router.navigate(['login-form'])
}

}
