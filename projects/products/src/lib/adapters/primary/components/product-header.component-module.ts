import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHeaderComponent } from './product-header.component';

@NgModule({ imports: [CommonModule],
  	declarations: [ProductHeaderComponent],
  	providers: [],
  	exports: [ProductHeaderComponent] })
export class ProductHeaderComponentModule {
}
