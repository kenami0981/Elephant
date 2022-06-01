import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeroComponent } from './about-hero.component';

@NgModule({ imports: [CommonModule],
  	declarations: [AboutHeroComponent],
  	providers: [],
  	exports: [AboutHeroComponent] })
export class AboutHeroComponentModule {
}
