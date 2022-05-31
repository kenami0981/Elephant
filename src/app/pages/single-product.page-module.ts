import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseNavigationServiceModule, NavComponentModule } from '@navigation';
import { FirebaseProductsServiceModule, SingleProductComponentModule } from '@products';
import { SingleProductPage } from './single-product.page';
import { FooterComponentModule } from '@footer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':productId',
        component: SingleProductPage,
      },
    ]),
    NavComponentModule,
    FirebaseNavigationServiceModule,
    FooterComponentModule,
    NavComponentModule,
    FooterComponentModule,
    SingleProductComponentModule,
    FirebaseProductsServiceModule
  ],
  declarations: [SingleProductPage],
  providers: [],
  exports: [],
})
export class SingleProductPageModule {}
