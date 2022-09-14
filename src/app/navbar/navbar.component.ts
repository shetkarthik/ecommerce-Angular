import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  displaytext="";
  
  getdata(item:string){
   this.displaytext = item;

  (this.displaytext == "") ? this.displaytext = "Please search something" : this.displaytext= this.displaytext + " found with search results";
  }

  

  @Input() item = ""

  ngOnInit(): void {
  }

}
