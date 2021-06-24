import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Index1Component } from './index1/index1.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: 'login-form', component: LoginFormComponent},
  {path: 'index1',component:Index1Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Index1Component,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
