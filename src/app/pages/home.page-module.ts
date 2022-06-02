import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponentModule } from '@navigation';
import { FirebaseProductsHeaderServiceModule, FirebaseProductsServiceModule, ProductHeaderComponentModule, ProductsComponentModule } from '@products';
import { BenefitComponentModule } from '@benefit';
import { PromotionComponentModule } from '@promo';
import { BestSellingComponentModule, FirebaseBestSellHeadingServiceModule, FirebaseBestSellServiceModule } from '@selling';
import { HomePage } from './home.page';
import { HeroComponentModule } from 'projects/hero/src/lib/adapters/primary/ui/hero.component-module';
import { FooterComponentModule } from 'projects/footer/src';

@NgModule({
  imports: [
    CommonModule,
    NavComponentModule,
    HeroComponentModule,
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
    FirebaseProductsHeaderServiceModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
