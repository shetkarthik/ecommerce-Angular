import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";

import * as productdetails from "../data/product.json";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  displaytext="";

  @Input() data:any;

  product:any = (productdetails as any).default;
  

  
  getdata(item:string){
   this.displaytext = item;
  
  this.router.navigate(['/',item]);

   

  // if(this.displaytext == )
  // {
  //   this.router.navigate(['/card']);
  // }
   
  }

  

  @Input() item = ""

  ngOnInit(): void {
  }

}
