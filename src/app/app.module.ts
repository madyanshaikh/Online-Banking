import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AccountListComponent } from './dashboard/MyAccounts/account-list/account-list.component';
import { AccountManagementComponent } from './dashboard/MyAccounts/account-management/account-management.component';
import { CardListComponent } from './dashboard/MyCard/card-list/card-list.component';
import { CardManagementComponent } from './dashboard/MyCard/card-management/card-management.component';
import { CreditCardManagementComponent } from './dashboard/MyCard/credit-card-management/credit-card-management.component';
import { BillPaymentsComponent } from './dashboard/Payments/bill-payments/bill-payments.component';
import { BeneficiaryManagementComponent } from './dashboard/Payments/beneficiary-management/beneficiary-management.component';
import { ChaqueBookRequestComponent } from './dashboard/ServiceRequest/chaque-book-request/chaque-book-request.component';
import { EStatementRequestComponent } from './dashboard/ServiceRequest/e-statement-request/e-statement-request.component';
import { StopChaqueComponent } from './dashboard/ServiceRequest/stop-chaque/stop-chaque.component';
import { SmsSubscriptionComponent } from './dashboard/ServiceRequest/sms-subscription/sms-subscription.component';
import { MyProfileComponent } from './dashboard/Settings/my-profile/my-profile.component';
import { SetupAlertAndNotificationComponent } from './dashboard/Settings/setup-alert-and-notification/setup-alert-and-notification.component';
import { ActivityLogsComponent } from './dashboard/Settings/activity-logs/activity-logs.component';
import { SessionHistoryComponent } from './dashboard/Settings/session-history/session-history.component';
import { FundTransferComponent } from './dashboard/Transfers/fund-transfer/fund-transfer.component';
import { InterBankFundTransferComponent } from './dashboard/Transfers/inter-bank-fund-transfer/inter-bank-fund-transfer.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';






const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AccountListComponent,
    AccountManagementComponent,
    CardListComponent,
    CardManagementComponent,
    CreditCardManagementComponent,
    BillPaymentsComponent,
    BeneficiaryManagementComponent,
    ChaqueBookRequestComponent,
    EStatementRequestComponent,
    StopChaqueComponent,
    SmsSubscriptionComponent,
    MyProfileComponent,
    SetupAlertAndNotificationComponent,
    ActivityLogsComponent,
    SessionHistoryComponent,
    FundTransferComponent,
    InterBankFundTransferComponent,
    routingComponents
   


    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
