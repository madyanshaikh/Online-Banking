import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { MyHomeComponent } from '../Home/my-home/my-home.component';
import { CardListComponent } from '../MyCard/card-list/card-list.component';
import { CreditCardPaymentComponent } from '../MyCard/credit-card-payment/credit-card-payment.component';
import { InterBankFundTransferComponent } from '../Transfers/inter-bank-fund-transfer/inter-bank-fund-transfer.component';
import { TransferBeneficiaryManagementComponent } from '../Transfers/transfer-beneficiary-management/transfer-beneficiary-management.component';
import { FundTransferComponent } from '../Transfers/fund-transfer/fund-transfer.component';
import { BeneficiaryManagementComponent } from '../Payments/beneficiary-management/beneficiary-management.component';
import { BillPaymentsComponent } from '../Payments/bill-payments/bill-payments.component';
import { EStatementRequestComponent } from '../ServiceRequest/e-statement-request/e-statement-request.component';
import { MyProfileComponent } from '../Settings/my-profile/my-profile.component';
import { AccountListComponent } from '../MyAccounts/account-list/account-list.component';
import { ChangePasswordComponent } from '../Settings/change-password/change-password.component';


const routes: Routes = [
{ path:'user-dashboard',component:DashboardComponent,children:[
  {path:'Home',component:MyHomeComponent},
  {path:'Account-List',component:AccountListComponent},
  {path:'Card-List',component:CardListComponent},
  {path:'Credit-Card-Payment',component:CreditCardPaymentComponent},
  {path:'Bill-Payment',component:BillPaymentsComponent},
  {path:'Beneficiary-Management',component:BeneficiaryManagementComponent},
  {path:'Fund-Transfer',component:FundTransferComponent},
  {path:'Inter-Bank-Fund-Transfer',component:InterBankFundTransferComponent},
  {path:'Transfer-Beneficiary-Management',component:TransferBeneficiaryManagementComponent},
  {path:'E-Statement-Request',component:EStatementRequestComponent},
  {path:'My-Profile',component:MyProfileComponent},
  {path:'Change-Password',component:ChangePasswordComponent}

  
  
  
]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UserMainRoutingModule { 

}
export const usermaincomponent =[

  DashboardComponent,
  MyHomeComponent,
CardListComponent,
CreditCardPaymentComponent,
BillPaymentsComponent,
BeneficiaryManagementComponent,
TransferBeneficiaryManagementComponent,
FundTransferComponent,
InterBankFundTransferComponent,
EStatementRequestComponent,
MyProfileComponent,
AccountListComponent,
ChangePasswordComponent



];
