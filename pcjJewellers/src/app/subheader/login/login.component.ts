import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../sharedServices/login.service';
import { error } from '@angular/compiler/src/util';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthenticationService } from '../../sharedServices/authentication.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../sharedServices/alert.service';
import { first } from 'rxjs/internal/operators/first';
import { User, LoginDetails, ResetPasswordStatus } from '../../../app/data/hero';
import { Observable } from 'rxjs';
import { AppService } from '../../sharedServices/app.service';

import {AuthService,SocialUser,GoogleLoginProvider,FacebookLoginProvider} from 'ng4-social-login';
import { Input } from '@angular/core/src/metadata/directives';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:any;
  public user1:LoginDetails;
  
  UserVariable;
  loading = false;
  submitted = false;
  loginForm: FormGroup;
  returnUrl: string;
  private loginDetails: LoginDetails[];
  resetpasswordForm:FormGroup;
  forgotpasswordForm: FormGroup;
 // resetPassword:FormGroup;
  private userdetails;
  showsecurityquestionForm:FormGroup;
  private submittedSecurityAnswer=true;
  private error;
  private forgotemaildetails;
  private currentemail;
  private remembermeclicked;
  private formdetails;
 
    public responseData:any;
    public userPostData={
      email:'',
      name:'',
      provider:'',
      provider_id:'',
      provider_pic:'',
      token:''
    };
    isresetPassword:boolean;
    isForgotPassword: boolean;
    private rememberedemail=localStorage.getItem('email');
  constructor( private formBuilder: FormBuilder,private _http: HttpClient,private _appservice:AppService,private _loginService:LoginService, private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,private alertService:AlertService,private socialAuthService:AuthService) {
      this.isForgotPassword = false;
     }

  ngOnInit() {
  
    //this.checkLoginDetails();
    //var rememberedemail=localStorage.getItem('email');
    this.resetpasswordForm=this.formBuilder.group({
      newpassword:[''],
      confirmpassword:['']
    });
    this.forgotpasswordForm = this.formBuilder.group({
      email_id:['']
       });
    this.showsecurityquestionForm = this.formBuilder.group({
      securityquestion:[''],
      securityanswer:['']
       });
    this.loginForm = this.formBuilder.group({
      email_id:['', Validators.required],
      password: ['', Validators.required]
   });
   this._loginService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
   
  }
 
public socialSignIn(socialPlatform:string){
  let socialPlatformProvider;
  if(socialPlatform==='facebook'){
    socialPlatformProvider=FacebookLoginProvider.PROVIDER_ID;
  }else if(socialPlatform==='google'){
    socialPlatformProvider=GoogleLoginProvider.PROVIDER_ID;
  }
  this.socialAuthService.signIn(socialPlatformProvider).then((userData)=>{
  this.user=userData;
  console.log(this.user);
 this.apiConnection(this.user);
 console.log(userData.id);
  }
);
}
apiConnection(data){
  this.userPostData.email=data.email;
  console.log(this.userPostData.email);
  this.userPostData.name=data.name;
  this.userPostData.provider = data.provider;
  this.userPostData.provider_id = data.id;
  this.userPostData.provider_pic = data.image;
  this.userPostData.token = data.token;
  // this._loginService.postData(this.userPostData,'signup').then(
  //   result=>{
  //     this.responseData=result;
  //     if(this.responseData.userData){
  //       this.user.storeData(this.responseData.userData);
  //     }
  //   },
  //   err=>{
  //     console.log('error');
  //   }
  // );
}
get f() { 
    return this.loginForm.controls;
   }
   checkLoginDetails(){
    this.loading = true;
    console.log(this.loginForm.value);
    // var status="loggedin";
   // const loginDetails = this.loginForm.value;
  // const user = this.loginForm.value;    
  
  if(this.loginForm.value.email_id==""&&this.loginForm.value.password=="")
    {
      this.error="make sure to enter mailid and password";
      console.log(this.error);
    }
   this._loginService.getLoginStatus(this.loginForm.value).subscribe(data =>
    {
      console.log(data);
      this.user1=data;
      console.log(this.user1);
      console.log(this.user1.loginStatus);
      localStorage.setItem('currentUser',this.user1.email_id);
      if(this.user1.loginStatus=="login success"){
        if(this.remembermeclicked==true)
        
        localStorage.setItem('email',this.user1.email_id);
        localStorage.setItem('password',this.user1.password);
        this._appservice.userdetails=this.user1;
       // sessionStorage.setItem('password',this.user.userdetails.);
        //sessionStorage.setItem('sessiondetails',this.user.userdetails.firstname);
        //this.router.navigate(['/main/header/subheader/products']);
      }
     
 });
 console.log(this.user1);
}

facebookLogin(){
  this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>
{
  this.user=userData;
  console.log(this.user);
  this.apiConnection(userData);
  console.log(userData.email);
});
// this.userDetails();
}
googleLogin(){
  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>
{
  this.user=userData;
  console.log(this.user);
  this.apiConnection(userData);
  console.log(userData.email);

});
}


RememberingEmail(){
  this.remembermeclicked=true;
}
   Register(){
    this.router.navigate(['/main/header/subheader/register']);
   }
   ForgotPassword(){
     this.CheckEmail();
   }
   CloseForgotPasssword1(){
     console.log("forgot password1");
   }
   CheckEmail(){
    this.isresetPassword=true;
    this.formdetails=this.forgotpasswordForm.value;
    console.log(this.formdetails);
    this._loginService.CheckEmail(this.formdetails).subscribe(response =>
    {
      console.log(response);
      this.isForgotPassword = false;
      if(response.status=="registerd Email"){
        //reset the password

        console.log("email exists in the database enter the new password");
      }
     // this.forgotemaildetails=response.emaildetails;
      //if(response.emailstatus=="exists"){
      //  for(var i=0;i<this.securityQuestions.securityQuestions.length;i++){
       //   if(this.securityQuestions.securityQuestions[i].sid==response.emaildetails.securityquestion)
       //this.showsecurityquestionForm.controls['securityquestion'].setValue(this.securityQuestions.securityQuestions[i].sname); 
         //}
  // }
  });
}
   closeshowsecurityquestion(){

   }
   CheckSecurityAnswer(){

   }
   CloseForgotPasssword2(){

   }
   ResetPassword(){
    var formdetails1=this.resetpasswordForm.value;
    if(formdetails1.newpassword==formdetails1.confirmpassword){
      console.log("new password and confirm password is same");
    
   // var checkpassworddetails={email:this.forgotemaildetails.registeremail,password:formdetails.password};
    //console.log(checkpassworddetails);
    console.log(this.formdetails);
    var checkpassworddetails={email_id:this.formdetails.email_id,password:formdetails1.newpassword};
     this._loginService.resetPasswordInit(checkpassworddetails).subscribe(data =>
     {
      //var response=<ResetPasswordStatus[]>data;
      this.UserVariable=<any>data
       console.log(formdetails1.newpassword);
       console.log(this.UserVariable);
       if(this.UserVariable.status=="reset password successfully"){
        this.isresetPassword=false;
        console.log("password is successfully updated");
       }
      
     });
    }
   }
   onSubmit()
   {
     
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }
 /* this.loading = true;
    console.log("login submit working");
    console.log(logindata);
    this._loginService.getLoginStatus(logindata).subscribe(data=>{
      console.log(data);
    },
    error=>{
      this.alertService.error(error);
      this.loading = false;
      });*/
this.loading = true;
    console.log("login submit working");
   // console.log(logindata);
    this.authenticationService.login(this.f.email_id.value)
    .subscribe(
        data => {
          console.log(data);
          console.log("this is the response from login");
           // this.router.navigate([this.returnUrl]);
        },

  error=>{
    console.log(error);
  //this.alertService.error(error);
  this.loading = false;
  });
  }
  
  
    // this.auth.resetPasswordInit(this.email) 
    // .then(
    //   () => alert('A password reset link has been sent to your email
    //   address'), 
    //   (rejectionReason) => alert(rejectionReason)) 
    // .catch(e => alert('An error occurred while attempting to reset
    //   your password')); 
  


   }
