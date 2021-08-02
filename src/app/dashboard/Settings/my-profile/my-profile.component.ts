import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const feather: any;

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})






export class MyProfileComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit() {
    feather.replace();
  }
  

btnClick = () =>{
  this.router.navigateByUrl('user-dashboard/Change-Password');
}

}