import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormsModule} from "@angular/forms"
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @Output() updateDataEvent = new EventEmitter<string>();

 email = "";
 pass = "";

  userLogin(item:any){
    // console.log(item)
    this.email = item.email;
    this.pass = item.password;

    console.log(this.email);
    console.log(this.pass);
  }

  
  ngOnInit(): void {
  }

}
