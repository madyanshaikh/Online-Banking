import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Online-Banking';


  constructor(private router: Router) {
    var status = localStorage.getItem("token")
    if (status !== null || status == 'True') {
      
      router.navigate(["admin-dashboard/home"])
    }

    else{
      router.navigate(["welcome"])
    }
  }




 


}
