import { Component, OnInit } from '@angular/core';

import * as data from "src/db.json";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public emp:any = [];

  constructor() { }

  

  db:any=(data as any).default.posts;

  ngOnInit(): void {    
  }


  show_details(product:any){
    //  this.show = !this.show;
     product.isOpen = !product.isOpen;
   }
  
   toggleClass(product:any){
    var content = "";
    if(product.isOpen==false)
    {
      content="fa-solid fa-caret-down";
    }
    else{
      content="fa-solid fa-caret-up";
    }
    return content;
   }
  

}
