import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponentModule } from '@navigation';
import { BenefitComponentModule } from '@benefit';
import { PromotionComponentModule } from '@promo';
import { BestSellingComponentModule, FirebaseBestSellHeadingServiceModule, FirebaseBestSellServiceModule } from '@selling';
import { HomePage } from './home.page';
import { HeroComponentModule } from 'projects/hero/src/lib/adapters/primary/ui/hero.component-module';
import { ProductsComponentModule } from 'projects/products/src/lib/adapters/primary/components/products.component-module';
import { FooterComponentModule } from 'projects/footer/src';
import { FirebaseProductsServiceModule } from '@products';

@NgModule({
  imports: [
    CommonModule,
    NavComponentModule,
    HeroComponentModule,
    ProductsComponentModule,
    BenefitComponentModule,
    PromotionComponentModule,
    BestSellingComponentModule,
    FooterComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    FirebaseBestSellServiceModule,
    FirebaseBestSellHeadingServiceModule,
    FirebaseProductsServiceModule
  
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
