import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateCopmponent } from './employee-create/employee-create.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import {ApiServices} from './services/service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, EmployeeListComponent,EmployeeCreateCopmponent, AddEmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
