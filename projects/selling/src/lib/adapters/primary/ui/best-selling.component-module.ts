import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellingComponent } from './best-selling.component';

@NgModule({ imports: [CommonModule],
  	declarations: [BestSellingComponent],
  	providers: [],
  	exports: [BestSellingComponent] })
export class BestSellingComponentModule {
}
