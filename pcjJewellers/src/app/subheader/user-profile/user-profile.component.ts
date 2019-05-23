import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { User, LoginDetails } from '../../../app/data/hero';
import { LoginComponent } from '../../subheader/login/login.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
@Input() userProfile:LoginDetails;
private userDetails:LoginDetails;
  constructor(private loginComponentDetails:LoginComponent) { }

  ngOnInit() {
    console.log(this.userProfile);
    this.userDetails=this.loginComponentDetails.user1;
   // console.log(this.loginComponentDetails.user1.email_id);
    console.log(this.loginComponentDetails.user1);
  }

}
