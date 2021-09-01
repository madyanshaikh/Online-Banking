import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserMainRoutingModule, usermaincomponent } from './dashboard/user-main-routing/user-main-routing.module';






const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent}
  
  

];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export  const routingcomponents =[
    AdminDashboardComponent,
    WelcomeComponent,
    usermaincomponent
   
  
  ];
  export const reactivemodule =[

    ReactiveFormsModule, 
    FormsModule,
    UserMainRoutingModule
  ] ;
