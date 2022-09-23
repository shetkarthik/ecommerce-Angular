import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticated:boolean = false;


  constructor(private authservice:UserService,private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      var isAuthenticated = this.authservice.authSubject.subscribe(
        (data:any)=>{
          console.log('next authenticated data' + data);
          this.isAuthenticated = data;
        }
      )

      if(this.isAuthenticated == false){
        console.log(this.isAuthenticated);
        this.router.navigate(['/login']);
        return false;
      }
      else{
        console.log(this.isAuthenticated);
        return true;
      }
  }
  
}
