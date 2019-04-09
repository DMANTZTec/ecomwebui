import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorporategiftingComponent } from './header/corporategifting/corporategifting.component';
import { GiftscardsComponent } from './header/giftscards/giftscards.component';
import { JflpaymentsComponent } from './header/jflpayments/jflpayments.component';
import { StorelocatorComponent } from './header/storelocator/storelocator.component';
import { CorporateComponent } from './header/corporate/corporate.component';
import { InvestorsComponent } from './header/investors/investors.component';
import { LoginComponent } from './subheader/login/login.component';
import { RegisterComponent } from './subheader/register/register.component';
import { CartComponent } from './subheader/cart/cart.component';
import { FavoritesComponent } from './subheader/favorites/favorites.component';
import { ProductListComponent } from 'src/app/Product/product-list/product-list.component';
import { ProductTileComponent } from 'src/app/Product/product-list/product-tile/product-tile.component';
import { AuthGuard } from 'src/app/auth.guard'
import { HeaderComponent } from 'src/app/header/header.component';
import { SubheaderComponent } from 'src/app/subheader/subheader.component';
import { TabsComponent } from 'src/app/header/tabs/tabs.component';
import { DropdownsComponent } from 'src/app/subheader/dropdowns/dropdowns.component';
import { MainbodyComponent } from 'src/app/mainbody/mainbody.component';
const appRoutes:Routes=[
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path:"main",
    component:MainbodyComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'header',
     },
     {
      path: 'header',
      component:HeaderComponent,
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      children:[
        {
          path:'',
          pathMatch:'full',
          redirectTo:'subheader'
        },
        {
          path:'subheader',
          component:SubheaderComponent,
          canActivate: [AuthGuard],
          canActivateChild: [AuthGuard],
          children:[
            {
              path:'',
              pathMatch:'full',
              redirectTo:'products'
            },
            {
              path:'products',
              component:ProductListComponent,
              canActivate: [AuthGuard],
              canActivateChild: [AuthGuard],
            },
            {
              path:'login',              
              component:LoginComponent,
              canActivate: [AuthGuard],
              canActivateChild: [AuthGuard],
             },
             {
               path:'register',
               component:RegisterComponent,
               canActivate: [AuthGuard],
               canActivateChild: [AuthGuard],
             },
             {
               path:'cart',
               component:CartComponent,
               canActivate: [AuthGuard],
               canActivateChild: [AuthGuard],
             },
             {
               path:'favorites',
               component:FavoritesComponent,
               canActivate: [AuthGuard],
               canActivateChild: [AuthGuard],
             },
          ]
        }
      ]
    }

    ]
  }


];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})
export class AppRoutingModule { }
