import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterFormDTO } from './footer-form.dto';

export const ADDS_FOOTER_FORM_DTO = new InjectionToken<AddsFooterFormDtoPort>('ADDS_FOOTER_FORM_DTO');

export interface AddsFooterFormDtoPort {
  add(footerForm: Partial<FooterFormDTO>): Observable<void>;
}
