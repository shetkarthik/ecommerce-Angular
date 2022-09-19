import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './home/card/card.component';

import { ProductComponent } from './product/product.component';
import { ChanelComponent } from './chanel/chanel.component';
import { ImgcardComponent } from './imgcard/imgcard.component';
import { ZaraComponent } from './zara/zara.component';
import { GucciComponent } from './gucci/gucci.component';
import { CounterComponent } from './counter/counter.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    CardComponent,
    ChanelComponent,
    ImgcardComponent,
    ZaraComponent,
    GucciComponent,
    CounterComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
