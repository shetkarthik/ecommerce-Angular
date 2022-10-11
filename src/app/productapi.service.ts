import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  constructor(private http:HttpClient) {}
  url:string=environment.postsapi;
  postProducts(data:any){
    return this.http.post<any>(this.url,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getProducts(){
    return this.http.get<any>(this.url).pipe(map((res:any)=>{
      return res;
    }))
  }
  updateProducts(data:any,pid:number){
    return this.http.put<any>(this.url+'/'+ pid,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteProducts(pid:number){
    return this.http.delete<any>(this.url+'/'+ pid).pipe(map((res:any)=>{
      return res;
    }))
  }
}
