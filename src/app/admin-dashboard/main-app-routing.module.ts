import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { CustomersComponent } from './customers/customers.component';
import { BranchComponent } from './branch/branch.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RevenueComponent } from './revenue/revenue.component';
import { NotificationComponent } from './notification/notification.component';
import { LoanComponent } from './loan/loan.component';
import { SettingComponent } from './setting/setting.component'
import { AdminDashboardComponent } from './admin-dashboard.component';
import { HrComponent } from './department/hr/hr.component';
import { QualityComponent } from './department/quality/quality.component';
import { ComplaintComponent } from './department/complaint/complaint.component';
import { ItComponent } from './department/it/it.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './employee/add/add.component';
import { ViewComponent } from './employee/view/view.component';
import { AddCustomerComponent } from './customers/addcustomer/addcustomer.component';
import { ViewCustomerComponent } from './customers/viewcustomer/viewcustomer.component';
import { ViewaccountsComponent } from './accounts/viewaccounts/viewaccounts.component';
import { AddaccountsComponent } from './accounts/addaccounts/addaccounts.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CreditCardComponent } from './department/credit-card/credit-card.component';
import { CollectionComponent } from './department/collection/collection.component';
import { LoanDepartComponent } from './department/loan-depart/loan-depart.component';
import { AuthGuard } from '../auth/auth.guard';
const routes: Routes = [
  {
    path: 'admin-dashboard', component: AdminDashboardComponent,canActivate:[AuthGuard], children: [
      { path: 'home', component: HomeComponent,canActivate:[AuthGuard],},
      {path:'employee',component:EmployeeComponent,canActivate:[AuthGuard],
      
      children:[{path:'add',component:AddComponent},
      { path:'view',component: ViewComponent,}] 
    },

      {path: 'department', component: DepartmentComponent,canActivate:[AuthGuard],
      
      children: [{ path: 'hr', component: HrComponent },
      { path: 'quality', component: QualityComponent }, 
      { path: 'complaint', component: ComplaintComponent }, 
      { path: 'it', component: ItComponent }, { path: 'loanDepart', component: LoanDepartComponent }, 
      { path: 'collection', component: CollectionComponent }, 
      { path: 'credit-card', component: CreditCardComponent }]
      },

      {path:'customer',component:CustomersComponent,canActivate:[AuthGuard],
      children:[{path:'addcustomer',component:AddCustomerComponent},
      { path:'viewcustomer',component: ViewCustomerComponent,}] 
      },

      {path:'branch',component:BranchComponent,canActivate:[AuthGuard]},
      {path:'accounts',component:AccountsComponent,canActivate:[AuthGuard],
      
      children:[{path:'viewaccounts',component:ViewaccountsComponent},
      {path:'addaccounts',component:AddaccountsComponent}]},
      {path:'revenue',component:RevenueComponent},
      {path: 'notification',component:NotificationComponent},
      {path:'loan',component:LoanComponent},
      {path:'setting',component:SettingComponent}
    ]
  },
  {path:'welcome',component:WelcomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class MainAppRoutingModule { }

export const mainroutingcomponent = [

  HomeComponent,
  QualityComponent,
  EmployeeComponent,
  DepartmentComponent,
  CustomersComponent,
  BranchComponent,
  AccountsComponent,
  RevenueComponent,
  NotificationComponent,
  LoanComponent,
  SettingComponent,
  AddComponent,
  ViewComponent,
  AddCustomerComponent,
  ViewCustomerComponent,
  AddaccountsComponent,
  ViewaccountsComponent,
  WelcomeComponent,
  LoanDepartComponent,
  CreditCardComponent,
  CollectionComponent,
  HrComponent,
  ComplaintComponent,
  ItComponent

];