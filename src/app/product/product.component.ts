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

  array : string[] = ["a","b","c","d","e"];
}