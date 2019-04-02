import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/sharedServices/login.service';
import { error } from '@angular/compiler/src/util';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/sharedServices/authentication.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loading = false;
  submitted = false;
  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder,private _http: HttpClient,private _loginService:LoginService, private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email_id:['', Validators.required],
      password: ['', Validators.required]
   });
   //this.authenticationService.logout();
   
  }
  get f() { return this.loginForm.controls; }
  onSubmit(logindata){
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
  }
  this.loading = true;
    console.log("login submit working");
    console.log(logindata);
    this._loginService.getLoginStatus(logindata).subscribe(data=>{
      console.log(data);
    },
  error=>console.log(error));

  }

}
