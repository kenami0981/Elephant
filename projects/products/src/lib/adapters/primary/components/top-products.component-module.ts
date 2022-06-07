import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopProductsComponent } from './top-products.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [TopProductsComponent],
  	providers: [],
  	exports: [TopProductsComponent] })
export class TopProductsComponentModule {
}
