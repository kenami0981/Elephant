import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeroComponent } from './about-hero.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule,RouterModule],
  	declarations: [AboutHeroComponent],
  	providers: [],
  	exports: [AboutHeroComponent] })
export class AboutHeroComponentModule {
}
