import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product.component';

@NgModule({ imports: [CommonModule],
  	declarations: [SingleProductComponent],
  	providers: [],
  	exports: [SingleProductComponent] })
export class SingleProductComponentModule {
}
