import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [FormComponent],
  	providers: [],
  	exports: [FormComponent] })
export class FormComponentModule {
}

