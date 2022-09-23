import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContactDetails()
  {
    return[
      {"id":1,"name":"John","email":"John@ECMA.com"},
      {"id":2,"name":"David","email":"David@ECMA.com"},
      {"id":3,"name":"Dexter","email":"Dexter@ECMA.com"},
    ]
  }
}
