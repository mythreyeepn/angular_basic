import { Component, OnInit } from '@angular/core';
import { ApiServices} from '../services/service';
import {Router,ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public users;
public add;
postData;
test;
  constructor( private service : ApiServices , private router : Router) { }

  ngOnInit(): void {
    this.add="Add Employee";
    this.test=true;
    
this.service.getData().subscribe(response=>{
  this.users=response.data;
})

    // this.users = [{
    //   "firstName": "John",
    //   "lastName": "wick",
    //   "username": "john_wick",
    //   "age": 28,
    //   "salary": 50988899
    // }, {
    //   "firstName": "Jack",
    //   "lastName": "Sparrow",
    //   "username": "john_wick",
    //   "age": 28,
    //   "salary": 50988899
    // }, {
    //   "firstName": "Spider",
    //   "lastName": "Man",
    //   "username": "john_wick",
    //   "age": 28,
    //   "salary": 50988899
    // }, {
    //   "firstName": "Bat",
    //   "lastName": "Man",
    //   "username": "john_wick",
    //   "age": 28,
    //   "salary": 50988899
    // }]
  }

  AddDetails(){
    this.test=false;
this.postData="From component";
  }

   editMethod = (id) =>{
    this.router.navigate(['/editUser', id])
     }
}
