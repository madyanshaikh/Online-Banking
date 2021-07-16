import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyHomeComponent } from './dashboard/Home/my-home/my-home.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children:[
    {path: 'home', component: MyHomeComponent}
  ]} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MyHomeComponent, DashboardComponent]
