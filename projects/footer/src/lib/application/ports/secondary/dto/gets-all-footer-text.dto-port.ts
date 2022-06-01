import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterTextDTO } from './footer-text.dto';

export const GETS_ALL_FOOTER_TEXT_DTO = new InjectionToken<GetsAllFooterTextDtoPort>('GETS_ALL_FOOTER_TEXT_DTO');

export interface GetsAllFooterTextDtoPort {
  getAll(): Observable<FooterTextDTO[]>;
}
