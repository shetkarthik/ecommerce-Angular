import { Component, OnInit } from '@angular/core';

import { Cartitem } from '../cartitem';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private cartSvc: CartService, private router:Router) { }

  carts:Cartitem={
    id:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }

  cartData: any = [];
  totalprice: number = 0;
  quantity = 1;
 
  totalPrice(data: any) {
   
    const intialValue = 0;
    this.cartData = data;
    console.log(data);
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), intialValue);
    // const a = "100";
    return a;
  }
  cart: Cartitem[] = [];

  delete(deleteItem: Cartitem) {
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.pname)      
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully'
    })
    this.ngOnInit();
  }
  onClick(){
    this.router.navigate(['/card'])
  }
  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )

  }
}