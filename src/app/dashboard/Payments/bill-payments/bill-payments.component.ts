import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-payments',
  templateUrl: './bill-payments.component.html',
  styleUrls: ['./bill-payments.component.css']
})
export class BillPaymentsComponent implements OnInit {

  div1:boolean=false;
  bene1:boolean=false;
  bene2:boolean=false;
  bene3:boolean=false;
  constructor() {
    
   }

  ngOnInit(): void {

  }
  div1Function(){
    this.div1=true;
}
bene1Function(){
  this.bene1=true;
  this.bene2=false;
  this.bene3=false;
}
bene2Function(){
  this.bene2=true;
  this.bene1=false;
  this.bene3=false;
}
bene3Function(){
  this.bene3=true;
  this.bene2=false;
  this.bene1=false;
}
}