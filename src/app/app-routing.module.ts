import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { ChanelComponent } from './chanel/chanel.component';
import { ProductComponent } from './product/product.component';
import { ZaraComponent } from './zara/zara.component';
import { GucciComponent } from './gucci/gucci.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'cartitem',component:CartItemsComponent},
  {path:'card', component:ProductComponent},
  {path:'chanel', component:ChanelComponent},
  {path:'zara', component:ZaraComponent},
  {path:'gucci', component:GucciComponent},
  {path:'details',component:ProductdetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
