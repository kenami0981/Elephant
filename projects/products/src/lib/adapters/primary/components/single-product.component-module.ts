import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product.component';
import { RouterLink, RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

@NgModule({ imports: [CommonModule, RouterModule, RatingModule],
  	declarations: [SingleProductComponent],
  	providers: [],
  	exports: [SingleProductComponent] })
export class SingleProductComponentModule {
}
