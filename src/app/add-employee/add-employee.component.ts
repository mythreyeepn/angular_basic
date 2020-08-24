import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router,ActivatedRoute} from "@angular/router";
// import {ApiService} from "../service/api.service";
@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
public userId :any;
public buttonText='Add';
  constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute) { }
   addEmployee : FormGroup
  ngOnInit() {
    this.buttonText="Add"
    this.addEmployee=this.formBuilder.group({
      id:[],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]

    })
  }
  AddFunc(){
    console.log(this.addEmployee.value)
  }

}
