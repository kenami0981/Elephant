import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponentModule } from '@navigation';
import { FirebaseFooterBottomServiceModule, FirebaseFooterFormServiceModule, FooterBottomComponentModule, FooterComponentModule } from '@footer';
import { CheckoutComponentModule, FirebaseCheckoutServiceModule } from '@checkout';
import { BillPage } from './bill.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BillPage,
      },
    ]),
    NavComponentModule,
    FooterComponentModule,
    FirebaseFooterFormServiceModule,
    FooterBottomComponentModule,
    FirebaseFooterBottomServiceModule,
    FirebaseFooterFormServiceModule,
    CheckoutComponentModule,
    FirebaseCheckoutServiceModule
  ],
  declarations: [BillPage],
  providers: [],
  exports: [],
})
export class BillPageModule {}
