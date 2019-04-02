import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/sharedServices/user.service';
import { AlertService } from 'src/app/sharedServices/alert.service';
import { User } from 'src/app/data/hero';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  UserVariable; 
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email_id: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
     // stop here if form is invalid,this is for validation dont touch
     this.submitted=true;
     if (this.registerForm.invalid) {
        return;
    }
this.loading=true;
console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value)
        .subscribe(
            data => {
                this.UserVariable=<any>data
              
               console.log("data is",this.UserVariable);
               if(this.UserVariable.status=='registration Sucessful'){ 
              console.log("the response data is",this.UserVariable);
                this.router.navigate(['/login']);
                }
                else
                {
                    this.router.navigate(['/register']);  
                }
              // if(data==this.registerForm.value)
               // this.router.navigate(['/login']);
            },
            error => {
               // this.alertService.error(error);
               console.log(error);
              //this.router.navigate(['/login']);
            });
}
}


