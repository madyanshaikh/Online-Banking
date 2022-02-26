import { Component, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router} from '@angular/router';
import { EmployeeService } from 'src/shared/employee.service';




@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})

export class AdminDashboardComponent implements OnInit {

  isOpened: boolean = true;
  desktopViewWidth: number = 1100;
  data: any;
  name: any=[];



  constructor(private router :Router,public service :EmployeeService) { }

  ngOnInit(): void {


    this.onResize(window.innerWidth);

    this.service.UserProfile().subscribe(
      res=>{
        this.name =res ;
        
      },
    err=>{
      console.log(err)
    });

  }

  logOut(){
 
    localStorage.removeItem("token")
    sessionStorage.removeItem("token")

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






