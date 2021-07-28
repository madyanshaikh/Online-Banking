import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.css']
  
})
export class CreditCardPaymentComponent implements OnInit {
  div1:boolean=false;
  constructor() {
    
   }

  ngOnInit(): void {
    
  }
  div1Function(){
    this.div1=true;
}
}
