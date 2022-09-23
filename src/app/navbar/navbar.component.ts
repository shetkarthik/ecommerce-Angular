import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from '../user.service';

//Cart count
import { CartService } from '../cart.service';
import * as productdetails from "../data/product.json";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private authService:UserService,private cartSvc:CartService) { }

  displaytext="";
  auth:boolean = false;
  cartCount: number=0;

  @Input() data:any;

  product:any = (productdetails as any).default;
  

  
  getdata(item:string){
   this.displaytext = item;
  this.router.navigate(['/',item]);   
  }

  

  @Input() item = ""

  ngOnInit(): void {
    this.authService.authSubject.subscribe(res=>{
      console.log(res);
      this.auth = res;
    });
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
  }

}
