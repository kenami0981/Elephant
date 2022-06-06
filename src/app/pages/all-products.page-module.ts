import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponentModule } from '@navigation';
import { FirebaseFooterBottomServiceModule, FooterBottomComponentModule, FooterComponentModule } from '@footer';
import { AllProductsComponentModule, FirebaseProductsHeaderServiceModule, FirebaseProductsServiceModule, ProductHeaderComponentModule } from '@products';
import { AllProductsPage } from './all-products.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AllProductsPage,
        }
      ]),
  NavComponentModule,
  FooterComponentModule,
  AllProductsComponentModule,
  FirebaseProductsServiceModule,
  ProductHeaderComponentModule,
  FirebaseProductsHeaderServiceModule,
  FooterBottomComponentModule,
  FirebaseFooterBottomServiceModule
],
  	declarations: [AllProductsPage],
  	providers: [],
  	exports: [] })
export class AllProductsPageModule {
}
