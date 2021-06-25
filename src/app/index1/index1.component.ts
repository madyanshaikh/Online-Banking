import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css']
})
export class Index1Component implements OnInit {







  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onLogout()
  {
    sessionStorage.removeItem('isLogedIn')
    this.router.navigate(['login'])
  }
}
