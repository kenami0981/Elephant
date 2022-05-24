import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactDTO } from './contact.dto';

export const ADDS_CONTACT_DTO = new InjectionToken<AddsContactDtoPort>('ADDS_CONTACT_DTO');

export interface AddsContactDtoPort {
  add(contact: Partial<ContactDTO>): Observable<void>;
}
