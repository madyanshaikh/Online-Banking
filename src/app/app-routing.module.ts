import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DepartmentComponent } from './department/department.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyHomeComponent } from './dashboard/Home/my-home/my-home.component';
import { AccountListComponent } from './dashboard/MyAccounts/account-list/account-list.component';
import { CardListComponent } from './dashboard/MyCard/card-list/card-list.component';
import { AccountManagementComponent } from './dashboard/MyAccounts/account-management/account-management.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'login-form', component: LoginFormComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'dapartment',component: DepartmentComponent},
  { path: 'user-dashboard',component:DashboardComponent, children:[
    {path: 'Home', component:MyHomeComponent},
    {path: 'Account-List', component:AccountListComponent},
    {path: 'Account-Management', component:AccountManagementComponent},
    {path: 'Card-List', component:CardListComponent}
  ]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export  const routingcomponents =[
    LoginFormComponent,
    DashboardComponent,
    AdminDashboardComponent,
    WelcomeComponent,
    DepartmentComponent,
    MyHomeComponent,
    AccountListComponent,
    CardListComponent,
    AccountManagementComponent
   
  ];
  export const reactivemodule =[

    ReactiveFormsModule, 
    FormsModule
  ] ;
