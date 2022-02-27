import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { MainAppRoutingModule, mainroutingcomponent } from './admin-dashboard/main-app-routing.module';
import { UserMainRoutingModule,usermaincomponent } from './dashboard/user-main-routing/user-main-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { reactivemodule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthInterceptor } from './auth/AuthInterceptor';
import { EmployeeService } from 'src/shared/employee.service';
import { AuthGuard } from './auth/auth.guard';
import { AddBranchComponent } from './admin-dashboard/branch/add-branch/add-branch.component';



@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    usermaincomponent,
    mainroutingcomponent,
  WelcomeComponent,
  AddBranchComponent
    
   
    

  ],


  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule, 
    BrowserAnimationsModule,
    MainAppRoutingModule,
    UserMainRoutingModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    CollapseModule,
    reactivemodule,
    HttpClientModule,
    MatInputModule,
    ToastrModule.forRoot()
   
  ],

  
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
