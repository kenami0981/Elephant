import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponentModule } from '@navigation';
import { FirebaseFooterBottomServiceModule, FooterBottomComponentModule, FooterComponentModule } from '@footer';
import { FirebaseProductsServiceModule, InMemoryProductContextStorageModule, SingleProductComponentModule } from '@products';
import { SingleProductPage } from './single-product.page';

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
    FooterComponentModule,
    NavComponentModule,
    FooterComponentModule,
    SingleProductComponentModule,
    FirebaseProductsServiceModule,
    FooterBottomComponentModule,
    FirebaseFooterBottomServiceModule,
    InMemoryProductContextStorageModule,
  ],
  declarations: [SingleProductPage],
  providers: [],
  exports: [],
})
export class SingleProductPageModule {}
