import { Component, OnInit } from '@angular/core';
import * as chaneldetails from "../data/brands/chanel/chanel.json";

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.css']
})
export class ChanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cd:any = (chaneldetails as any).default;

  // product: any =(productdetails as any).default;

  // ChanelDetails :any  = [
  //   {
  //     "pid": "100",
  //     "pname": "Decor",
  //     "status": "Active",
  //     "color": "green",
  //     "pimage":"https://i.pinimg.com/originals/62/90/bd/6290bdcada4609ffd7c3f1c70a3981ac.png",
  //     "pdesc":"  Lorem  explicabo magnam, molestias nulla culpa doloribus blanditiis, tempore nihil minima."
  //   },
  //   {
  //     "pid": "101",
  //     "pname": "Gucci",
  //     "status": "InActive",
  //     "color": "red",
  //     "pimage":"https://image.made-in-china.com/44f3j00TuYQCvoaTVrW/Business-Women-Bag-PU-Leather-Handbag-Designer-Tote-Bag-Black-White-Color-Bag-Wholesale-Handbag-Ladies-Handbag-Designer-Handbag-WDL1202-.jpg",
  //     "pdesc":"  Lorem ipsum, oloribus blanditiis, tempore nihil minima."
  //   },
  //   {
  //     "pid": "102",
  //     "pname": "Chanel",
  //     "status": "Out of Stock",
  //     "color": "yellow",
  //     "pimage":"https://cdn.cliqueinc.com/posts/281389/best-designer-wallets-281389-1616619919451-main.700x0c.jpg",
  //     "pdesc":"  Lorem ipsum, loribus blanditiis, tempore nihil minima."
      
  //   },

  // ]



}
