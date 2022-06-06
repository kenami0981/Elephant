import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponentModule } from '@cart';
import { FirebaseNavigationServiceModule, NavComponentModule } from '@navigation';
import { FirebaseFooterFormServiceModule, FirebaseFooterIconsServiceModule, FooterBottomComponentModule, FooterComponentModule } from '@footer';
import { CartPage } from './cart.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartPage,
      },
    ]),
    CartComponentModule,
    NavComponentModule,
    FooterComponentModule,
    FooterBottomComponentModule,
    FirebaseNavigationServiceModule,
    FirebaseFooterFormServiceModule,
    FirebaseFooterIconsServiceModule
  ],
  declarations: [CartPage],
  providers: [],
  exports: [],
})
export class CartPageModule {}
