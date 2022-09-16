import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  displaytext="";
  
  getdata(item:string){
   this.displaytext = item;
  
  this.router.navigate(['/',item]);
   
  }

  

  @Input() item = ""

  ngOnInit(): void {
  }

}
