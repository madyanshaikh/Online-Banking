import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { MainAppRoutingModule, mainroutingcomponent } from './admin-dashboard/main-app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';



@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    mainroutingcomponent,

  ],


  imports: [
    BrowserModule,
    MaterialModule,    
    BrowserAnimationsModule,
    AppRoutingModule,
    MainAppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    CollapseModule
    

  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
