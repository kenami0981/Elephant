import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponentModule } from '@navigation';
import { FirebaseContactServiceModule, FormComponentModule } from '@contact';
import { PromotionComponentModule } from '@promo';
import { FirebaseFooterBottomServiceModule, FooterBottomComponentModule, FooterComponentModule } from '@footer';
import { ContactPage } from './contact.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ContactPage,
        }
      ]),
  NavComponentModule,
  FormComponentModule,
  FirebaseContactServiceModule,
  PromotionComponentModule,
  FooterComponentModule,
  FooterBottomComponentModule,
  FirebaseFooterBottomServiceModule,
],
  	declarations: [ContactPage],
  	providers: [],
  	exports: [] })
export class ContactPageModule {
}
