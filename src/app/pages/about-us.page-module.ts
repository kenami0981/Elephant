import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseNavigationServiceModule, NavComponentModule } from '@navigation';
import { FoundersComponentModule } from '@founders';
import { TestimonialsComponentModule } from '@testimonials';
import { FirebaseFooterBottomServiceModule, FooterBottomComponentModule, FooterComponentModule } from '@footer';
import { AboutHeroComponentModule } from '@about';
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
  FoundersComponentModule,
  TestimonialsComponentModule,
  FooterComponentModule,
  AboutHeroComponentModule,
  FooterBottomComponentModule,
  FirebaseFooterBottomServiceModule
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
