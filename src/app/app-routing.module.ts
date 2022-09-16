import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ChanelComponent } from './chanel/chanel.component';
import { ZaraComponent } from './zara/zara.component';
import { GucciComponent } from './gucci/gucci.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path:'card', component:ProductComponent},
  {path:'chanel', component:ChanelComponent},
  {path:'zara', component:ZaraComponent},
  {path:'gucci', component:GucciComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
