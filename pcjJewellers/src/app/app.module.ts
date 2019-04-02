import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { CorporateGiftingComponent } from './tabs/corporate-gifting/corporate-gifting.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GiftscardsComponent } from './header/giftscards/giftscards.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { SearchComponent } from './subheader/search/search.component';
import { LoginComponent } from './subheader/login/login.component';
import { RegisterComponent } from './subheader/register/register.component';
import { FavoritesComponent } from './subheader/favorites/favorites.component';
import { CartComponent } from './subheader/cart/cart.component';
import { DropdownsComponent } from './subheader/dropdowns/dropdowns.component';

import { MainbodyComponent } from './mainbody/mainbody.component';
import { TabsComponent } from './header/tabs/tabs.component';
import { NgModule } from '@angular/core';
import { CorporategiftingComponent } from './header/corporategifting/corporategifting.component';
import { Router, RouterModule } from '@angular/router';
import { JflpaymentsComponent } from './header/jflpayments/jflpayments.component';
import { StorelocatorComponent } from './header/storelocator/storelocator.component';
import { CorporateComponent } from './header/corporate/corporate.component';
import { InvestorsComponent } from './header/investors/investors.component';
import { EventsComponent } from './events/events.component';
import { GoldComponent } from './subheader/dropdowns/gold/gold.component';
import { SilverComponent } from './subheader/dropdowns/silver/silver.component';
import { DiamondsComponent } from './subheader/dropdowns/diamonds/diamonds.component';
import { DropdownitemsComponent } from './subheader/dropdowns/dropdownitems/dropdownitems.component';
import { AlertService } from 'src/app/sharedServices/alert.service';
import { AuthenticationService } from 'src/app/sharedServices/authentication.service';
import { UserService } from 'src/app/sharedServices/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CorporategiftingComponent,
    HeaderComponent,
    JflpaymentsComponent,
    StorelocatorComponent,
    CorporateComponent,
    InvestorsComponent,
    GiftscardsComponent,
    SubheaderComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    FavoritesComponent,
    CartComponent,
    DropdownsComponent,
    TabsComponent,
    MainbodyComponent,
    EventsComponent,
    GoldComponent,
    SilverComponent,
    DiamondsComponent,
    DropdownitemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService],
    bootstrap: [AppComponent]
  })
export class AppModule { }
