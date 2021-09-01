import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-statement-request',
  templateUrl: './e-statement-request.component.html',
  styleUrls: ['./e-statement-request.component.css']
})
export class EStatementRequestComponent implements OnInit {
  bene1:boolean=true;
  bene2:boolean=false;
  constructor() {
    
   }

  ngOnInit(): void {

  }

bene1Function(){
  this.bene1=true;
  this.bene2=false;
  
}
bene2Function(){
  this.bene2=true;
  this.bene1=false;
  
}

}