
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormControl, FormGroup, FormsModule} from "@angular/forms";
import{Router} from "@angular/router";
import { User } from '../user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router,private _registerService:RegisterService) { }

  @Output() updateDataEvent = new EventEmitter<string>();

  sentname:string="";


 email = "";
 message = "";
 name = "";
 phone="";

 userModel = new User("shet","shet@.com","3456","Hi");

 register: [] = [];

  userLogin(item:any){
    // console.log(item)
    this.email = item.email;
    this.message = item.message;
    this.name = item.name;
    this.phone = item.phone;

    console.log(this.email);
    console.log(this.name);
    console.log(this.phone);
    console.log(this.message);

    
    console.log(this.userModel);

    this._registerService.register(this.userModel)
    .subscribe(
      (data:User)=> console.log("Success",data),
      (error: any)=> console.log(error)
    )
   
    alert("Thank you " + this.name + " for your feedback");

    this.router.navigate(['/']);

   

  }

  registrationForm = new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      message: new FormControl(''),

  });

  
  ngOnInit(): void {
    
  }

}
