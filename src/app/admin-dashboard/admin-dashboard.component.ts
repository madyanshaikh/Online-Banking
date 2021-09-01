import { Component, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router} from '@angular/router';




@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})

export class AdminDashboardComponent implements OnInit {

  isOpened: boolean = true;
  desktopViewWidth: number = 1100;



  constructor(private router :Router) { }

  ngOnInit(): void {


    this.onResize(window.innerWidth);

  }

  welcome(){
 
    sessionStorage.setItem("isLoggedoff","false")
    this.router.navigate(['welcome'])
  }


  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isOpened = width >= this.desktopViewWidth;
  }

  account(){

    this.router.navigate(['viewaccounts'])


  }








}




