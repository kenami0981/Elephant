import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellingComponent } from './best-selling.component';
import { RouterModule } from '@angular/router';


@NgModule({ imports: [CommonModule ,[RouterModule]],
  	declarations: [BestSellingComponent],
  	providers: [],
  	exports: [BestSellingComponent] })
export class BestSellingComponentModule {
}
