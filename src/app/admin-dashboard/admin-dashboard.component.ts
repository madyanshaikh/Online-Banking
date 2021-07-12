import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import "jquery";
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  navigate: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
dprt(){
  sessionStorage.setItem("isLogedIn", "true")
  this.router.navigate(['department'])
}

}


