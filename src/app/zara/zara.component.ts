import { Component, OnInit } from '@angular/core';
import * as zaradetails from "../data/brands/zara/zara.json";
import * as zaraproductdetails from "../data/brands/zara/zaraproduct.json";

@Component({
  selector: 'app-zara',
  templateUrl: './zara.component.html',
  styleUrls: ['./zara.component.css']
})
export class ZaraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  zd:any = (zaradetails as any).default;
  zpd:any = (zaraproductdetails as any).default;

}
