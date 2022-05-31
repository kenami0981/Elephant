import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule,[RouterModule]],
  	declarations: [AllProductsComponent],
  	providers: [],
  	exports: [AllProductsComponent] })
export class AllProductsComponentModule {
}
