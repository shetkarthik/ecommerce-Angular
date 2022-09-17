import { Component, OnInit } from '@angular/core';
import * as productdetails from "../data/product.json";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 product: any =(productdetails as any).default;

 
// show = false;


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