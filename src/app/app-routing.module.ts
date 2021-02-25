import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppoinmentComponent} from './appoinment/appoinment.component';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'appoinment',component:AppoinmentComponent},
  {path:'customer',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
