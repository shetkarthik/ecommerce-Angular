import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

import Swal from "sweetalert2";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  userapi = environment.userapi;

  submitted = false;

  get f() { return this.loginForm.controls; }

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.validateAuth(false);
    this.loginForm = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) { return; }
    this.http.get<any>(this.userapi).subscribe((res:any) => {
      const user= res.find((a: any) => {
        return a.useremail === this.loginForm.value.useremail && a.password === this.loginForm.value.password
      });
      if(user.useremail=="admin@gmail.com" && user.password=="admin123")
      {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'success',
          title: 'Admin logged'
        })
        this.loginForm.reset();
        this.router.navigate(['/details'])
        this.userService.validateAuth(true);
      }
      else if (user) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate(['/'])
        this.userService.validateAuth(true);
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'error',
          title: 'User not found'
        })
        this.userService.validateAuth(false);
      }
    })
  }

}
