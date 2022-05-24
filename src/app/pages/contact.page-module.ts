import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseNavigationServiceModule, NavComponentModule } from '@navigation';
import { ContactPage } from './contact.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ContactPage,
        }
      ]),
  NavComponentModule,
  FirebaseNavigationServiceModule
],
  	declarations: [ContactPage],
  	providers: [],
  	exports: [] })
export class ContactPageModule {
}
