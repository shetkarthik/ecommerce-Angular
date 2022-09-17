import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter:number = 0;
  isOkay = true;

  ngOnInit(): void {
  }

  inc(){
    this.counter++;
    return this.counter;
  }

  dec(){
    if(this.counter==0)
    {
      this.isOkay = false;
    }
    else{
      this.counter--;
    }
    return this.counter;
  }


}
