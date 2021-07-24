import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']

 
})

export class SettingComponent implements OnInit {
  
  isShown: boolean = true ;
  isNotShown: boolean = false ;
  
  constructor() { }
 
  ngOnInit(): void {
  
   
    

  
  
  }

  toggle(){
      this.isShown = !this.isShown
  }
  
  toggle1(){
    this.isNotShown = !this.isNotShown
}

  }
  
