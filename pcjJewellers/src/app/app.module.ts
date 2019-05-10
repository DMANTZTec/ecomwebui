import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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

import { AlertService } from 'src/app/sharedServices/alert.service';
import { AuthenticationService } from 'src/app/sharedServices/authentication.service';
import { UserService } from 'src/app/sharedServices/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from 'src/app/Product/product-list/product-list.component';
import { ProductTileComponent } from 'src/app/Product/product-list/product-tile/product-tile.component';
import { ProductListService } from 'src/app/Product/product-list/productListService';
import { AlertComponent } from './alert/alert.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { ProductDetailTileComponent } from './Product/product-detail/product-detail-tile/product-detail-tile.component';
import { OrderService } from 'src/app/sharedServices/order.service';
import { ProductDetailService } from 'src/app/sharedServices/product-detail.service';

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
    ProductListComponent,
    ProductTileComponent,
    EventsComponent,
   
    AlertComponent,
    ProductDetailComponent,
    ProductDetailTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [
    AlertService,
    ProductListService,
    AuthenticationService,
    UserService,
    OrderService,
  ProductDetailService],
    bootstrap: [AppComponent]
  })
export class AppModule { }
