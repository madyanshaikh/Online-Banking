import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminSummaryComponent } from './admin-summary/admin-summary.component';
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

const routes: Routes = [
  {
    path: 'admin-dashboard', component: AdminDashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      {path: 'department', component: DepartmentComponent, children: [{ path: 'hr', component: HrComponent },
        { path: 'quality', component: QualityComponent }, { path: 'complaint', component: ComplaintComponent }, { path: 'it', component: ItComponent }]
      }

    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }

export const mainroutingcomponent = [

  HomeComponent,
  QualityComponent,
  AdminSummaryComponent,
  EmployeeComponent,
  DepartmentComponent,
  CustomersComponent,
  BranchComponent,
  AccountsComponent,
  RevenueComponent,
  NotificationComponent,
  LoanComponent,
  SettingComponent

];