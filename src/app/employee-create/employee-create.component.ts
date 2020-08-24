import { Component, OnInit} from '@angular/core';
import { User } from '../Models/Model.user'

@Component({
selector: 'app-employee-create',
templateUrl:'employee-create.html'
})

export class EmployeeCreateCopmponent implements OnInit {
    buttonText;
model= new User(1,'','','',0,0)
 ngOnInit(){
this.buttonText="Add";

 }
 AddFunc(){
      let PostObject={
          "username":this.model.username,
          "firstName":this.model.firstName,
          "lastName":this.model.lastName,
          "age":this.model.age,
          "salary":this.model.salary
      }
      console.log(PostObject);
 }
}