import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseNavigationServiceModule,
  NavComponentModule,
} from '@navigation';
import {
  FirebaseFooterBottomServiceModule,
  FooterBottomComponentModule,
  FooterComponentModule,
} from '@footer';
import {
  FirebaseProductsServiceModule,
  InMemoryProductContextStorageModule,
  ProductIdResolver,
  ProductIdResolverModule,
  SingleProductComponentModule,
} from '@products';
import { SingleProductPage } from './single-product.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':productId',
        component: SingleProductPage,
        resolve: {
          productId: ProductIdResolver,
        },
      },
    ]),
    NavComponentModule,
    FirebaseNavigationServiceModule,
    FooterComponentModule,
    NavComponentModule,
    FooterComponentModule,
    SingleProductComponentModule,
    FooterBottomComponentModule,
    FirebaseFooterBottomServiceModule,
    InMemoryProductContextStorageModule,
    ProductIdResolverModule,
    FirebaseProductsServiceModule,
  ],
  declarations: [SingleProductPage],
  providers: [],
  exports: [],
})
export class SingleProductPageModule {}
