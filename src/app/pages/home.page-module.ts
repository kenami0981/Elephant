import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponentModule } from '@navigation';
import { FooterBottomComponentModule, FooterComponentModule } from '@footer';
import { FirebaseProductsHeaderServiceModule, FirebaseProductsServiceModule, InMemoryProductContextStorageModule, ProductHeaderComponentModule, ProductsComponentModule, SingleProductComponentModule } from '@products';
import { BenefitComponentModule } from '@benefit';
import { PromotionComponentModule } from '@promo';
import { BestSellingComponentModule, FirebaseBestSellHeadingServiceModule, FirebaseBestSellServiceModule } from '@selling';
import { HomePage } from './home.page';
import { HeroComponentModule } from 'projects/hero/src/lib/adapters/primary/ui/hero.component-module';

@NgModule({
  imports: [
    CommonModule,
    NavComponentModule,
    HeroComponentModule,
    FooterBottomComponentModule,
    ProductsComponentModule,
    BenefitComponentModule,
    PromotionComponentModule,
    BestSellingComponentModule,
    ProductHeaderComponentModule,
    FooterComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    FirebaseBestSellServiceModule,
    FirebaseBestSellHeadingServiceModule,
    FirebaseProductsServiceModule,
    FirebaseProductsHeaderServiceModule,
    SingleProductComponentModule,
    InMemoryProductContextStorageModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
