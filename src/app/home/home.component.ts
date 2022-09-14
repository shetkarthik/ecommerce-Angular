import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  user = "";
  pass = "";
 
   userLogin(item:any){
     // console.log(item)
     this.user = item.user;
     this.pass = item.pass;
 
     console.log(this.user);
     console.log(this.pass);
     
     alert(
      "Welcome to Ecom  " + item.user

     )
   }




  ngOnInit(): void {
  }

}
