import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.component';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MainAppRoutingModule,mainroutingcomponent} from './admin-dashboard/main-app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomeComponent } from './admin-dashboard/home/home.component';
import * as $ from 'jquery';







@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    mainroutingcomponent
   
  
   
    
    
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    MainAppRoutingModule,
    FormsModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
