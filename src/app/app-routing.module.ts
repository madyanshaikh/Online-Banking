import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AccountListComponent } from './account-list/account-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DepartmentComponent } from './department/department.component';



const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'login-form', component: LoginFormComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent,
    children :[ {path: 'dapartment',component: DepartmentComponent}]
  },
  { path: 'user-dashboard',component:DashboardComponent},
  { path: 'Account-List',component:AccountListComponent},

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
    AccountListComponent,
    WelcomeComponent,
    DepartmentComponent
   
  ]; 