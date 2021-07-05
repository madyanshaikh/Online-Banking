import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Index1Component } from './index1/index1.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';




const routes: Routes = [
  { path: 'login-form', component: LoginFormComponent},
  { path: 'dashboard',component:DashboardComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    Index1Component,
    LoginFormComponent,
    DashboardComponent,

    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
