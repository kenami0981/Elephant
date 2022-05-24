import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseNavigationServiceModule, NavComponentModule } from '@navigation';
import { FoundersComponentModule } from '../../../projects/founders/src'
import { AboutUsPage } from './about-us.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ]),
  NavComponentModule,
  FirebaseNavigationServiceModule,
  FoundersComponentModule
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
