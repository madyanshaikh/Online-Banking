import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  animations: [
  
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1000ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
 
})
export class AdminDashboardComponent implements OnInit {
  state: string = 'default';
  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
}
  constructor() { }

  ngOnInit(): void {

    // $(".flip").click(()=>{

    //     $(".btn-toggle1").toggleClass('rotated')

    // });
  }

}


