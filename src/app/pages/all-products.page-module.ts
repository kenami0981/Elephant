import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseNavigationServiceModule, NavComponentModule } from '@navigation';
import { AllProductsComponentModule, FirebaseProductsServiceModule } from '@products';
import { AllProductsPage } from './all-products.page';
import { FooterComponentModule } from '@footer';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AllProductsPage,
        }
      ]),
  NavComponentModule,
  FirebaseNavigationServiceModule,
  FooterComponentModule,
  AllProductsComponentModule,
  FirebaseProductsServiceModule
],
  	declarations: [AllProductsPage],
  	providers: [],
  	exports: [] })
export class AllProductsPageModule {
}