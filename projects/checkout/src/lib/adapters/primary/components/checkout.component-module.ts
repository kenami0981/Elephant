import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, [RouterModule]],
  	declarations: [CheckoutComponent],
  	providers: [],
  	exports: [CheckoutComponent] })
export class CheckoutComponentModule {
}
