import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { NavComponentModule } from '@navigation';
import { HeroComponentModule } from 'projects/hero/src/lib/adapters/primary/ui/hero.component-module';
import { ProductsComponentModule } from 'projects/products/src/lib/adapters/primary/ui/products.component-module';
import { BenefitComponentModule } from '@benefit';

@NgModule({ imports: [CommonModule, NavComponentModule, HeroComponentModule, ProductsComponentModule, BenefitComponentModule,
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ])],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
