import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponentModule } from '@navigation';
import { FooterBottomComponentModule, FooterComponentModule } from '@footer';
import { ConfirmationComponentModule } from '@confirmation';
import { ConfirmationPage } from './confirmation.page';

@NgModule({ imports: [CommonModule, NavComponentModule, FooterComponentModule, FooterBottomComponentModule,
      RouterModule.forChild([
        {
          path: '',
          component: ConfirmationPage,
        }
      ]), ConfirmationComponentModule],
  	declarations: [ConfirmationPage],
  	providers: [],
  	exports: [] })
export class ConfirmationPageModule {
}
