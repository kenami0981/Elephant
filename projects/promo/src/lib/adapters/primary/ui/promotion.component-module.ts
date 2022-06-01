import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';
import { RouterModule } from '@angular/router';


@NgModule({ imports: [CommonModule , [RouterModule]],
  	declarations: [PromotionComponent],
  	providers: [],
  	exports: [PromotionComponent] })
export class PromotionComponentModule {
}
