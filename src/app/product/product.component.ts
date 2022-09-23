import { Component, OnInit,Input } from '@angular/core';
import * as productdetails from "../data/product.json";
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private cartsvc:CartService) { }
  // @Input() product :any;


  

  selectedindex:number = 0;

  cart:Cartitem={
    id:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1  
  }
  
 quantity:number = 1;

 addToCart(product:any){
  console.log(product)
  this.cart.pname=product.pname;
    this.cart.pdescription=product.pdesc;
    this.cart.price=product.price;
    this.cart.img=product.pimage;
    this.cart.price=product.price;
    this.cart.totalPrice=product.price;
    this.cart.quantity=this.quantity;
    this.cart.id=product.id;
    console.log(this.cart);
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
 }

  ngOnInit(): void {
  }

 products: any =(productdetails as any).default;

 
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