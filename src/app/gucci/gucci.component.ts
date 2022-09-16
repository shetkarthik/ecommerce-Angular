import { Component, OnInit } from '@angular/core';
import * as guccidetails from "../data/brands/gucci/gucci.json";
import * as gucciproductdetails from "../data/brands/gucci/gucciproduct.json";

@Component({
  selector: 'app-gucci',
  templateUrl: './gucci.component.html',
  styleUrls: ['./gucci.component.css']
})
export class GucciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gd:any = (guccidetails as any).default;
  gpd:any = (gucciproductdetails as any).default;

}
