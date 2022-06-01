import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { RouterModule } from '@angular/router';


@NgModule({ imports: [CommonModule, [RouterModule]],
  	declarations: [HeroComponent],
  	providers: [],
  	exports: [HeroComponent] })
export class HeroComponentModule {
}
