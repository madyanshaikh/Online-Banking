import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.component';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { reactivemodule } from './app-routing.module';
import * as $ from 'jquery'

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents
    
    
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    reactivemodule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
