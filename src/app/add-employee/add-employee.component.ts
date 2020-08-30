import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router,ActivatedRoute} from "@angular/router";
import { ApiServices } from '../services/service';
@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
public userId :any;
public buttonText='Add';
  constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute,private service : ApiServices) { }
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

    if(this.route.snapshot.paramMap.get('id')){
      this.userId=this.route.snapshot.paramMap.get('id');
      this.buttonText='Update'
      this.service.editData(this.userId).subscribe(response=>{
       this.addEmployee.setValue(response.data);
      })
    }
  }
  AddFunc(){
    if(this.userId){
      this.service.updateData(this.addEmployee.value).subscribe(response=>{
        this.router.navigate(['users']);

      })
    }else{
      this.service.postData(this.addEmployee.value).subscribe(response =>{
        this.router.navigate(['users']);
       })
    }
  }


}
