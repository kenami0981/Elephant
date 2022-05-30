import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseNavigationServiceModule, NavComponentModule } from '@navigation';
import { FirebaseContactServiceModule, FormComponentModule } from '@contact';
import { PromotionComponentModule } from '@promo';
import { ContactPage } from './contact.page';
import { FooterComponentModule } from '@footer';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ContactPage,
        }
      ]),
  NavComponentModule,
  FirebaseNavigationServiceModule,
  FormComponentModule,
  FirebaseContactServiceModule,
  PromotionComponentModule,
  FooterComponentModule,
],
  	declarations: [ContactPage],
  	providers: [],
  	exports: [] })
export class ContactPageModule {
}
