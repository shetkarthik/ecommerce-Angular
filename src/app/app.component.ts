import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecom';
  data = 10;
  
  displayEmail = "";
  displayPassword = "";

  updateData(val1 : string,val2 : any){
    this.displayEmail = val1;
    this.displayPassword = val2;

     console.log(this.displayEmail);
     console.log(this.displayPassword);

  }


}
