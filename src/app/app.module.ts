import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { UserMainRoutingModule,Usermaincomponent } from './dashboard/user-main-routing/user-main-routing.module';
import { MainAppRoutingModule, mainroutingcomponent } from './admin-dashboard/main-app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.component';
import * as $ from 'jquery';







@NgModule({
  declarations: [
    AppComponent,
    mainroutingcomponent,
    Usermaincomponent,
    routingcomponents,
    

  ],


  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MainAppRoutingModule,
    UserMainRoutingModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
