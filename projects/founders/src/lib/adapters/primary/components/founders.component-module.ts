import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoundersComponent } from './founders.component';
import { RouterModule } from '@angular/router';


@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [FoundersComponent],
  	providers: [],
  	exports: [FoundersComponent] })
export class FoundersComponentModule {
}
