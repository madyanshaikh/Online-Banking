import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AccountListComponent } from './account-list/account-list.component';
import { WelcomeComponent } from './welcome/welcome.component';





const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'login-form', component: LoginFormComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'user-dashboard',component:DashboardComponent},
  

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
 
  
    
   
  ];
