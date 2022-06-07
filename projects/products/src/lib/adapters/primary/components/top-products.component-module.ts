import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopProductsComponent } from './top-products.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TopProductsComponent],
  	providers: [],
  	exports: [TopProductsComponent] })
export class TopProductsComponentModule {
}
