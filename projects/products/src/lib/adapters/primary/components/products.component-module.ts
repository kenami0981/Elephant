import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, [RouterModule]],
  	declarations: [ProductsComponent],
  	providers: [],
  	exports: [ProductsComponent] })
export class ProductsComponentModule {
}
