import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public authSubject = new Subject<boolean>();

  validateAuth(data:boolean){
    this.authSubject.next(data);
  }

  hosturl = environment.userapi;

  value?:boolean;
  getAuthStatus(){
    this.authSubject.subscribe(
      data=>{
        console.log(data);
        this.value = data;
        console.log(this.value);
      }
    );
    return this.value;
  }

  constructor() { }
}
