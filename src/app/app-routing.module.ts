import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserMainRoutingModule, usermaincomponent } from './dashboard/user-main-routing/user-main-routing.module';
import { UserAdminLoginComponent } from './welcome/user-admin-login/user-admin-login.component';






const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent,children:[{path:'Login-Option', component: UserAdminLoginComponent}]},
  { path: 'login-form', component: LoginFormComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent}
  
  

];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export  const routingcomponents =[
    LoginFormComponent,
    AdminDashboardComponent,
    WelcomeComponent,
    usermaincomponent
   
  
  ];
  export const reactivemodule =[

    ReactiveFormsModule, 
    FormsModule,
    UserMainRoutingModule
  ] ;
