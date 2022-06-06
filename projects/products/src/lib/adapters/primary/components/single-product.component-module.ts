import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [SingleProductComponent],
  	providers: [],
  	exports: [SingleProductComponent] })
export class SingleProductComponentModule {
}
