import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeCreateCopmponent } from './employee-create/employee-create.component';



const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  {path:'addUser',component:AddEmployeeComponent},
  {path: 'addModelUser',component: EmployeeCreateCopmponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
