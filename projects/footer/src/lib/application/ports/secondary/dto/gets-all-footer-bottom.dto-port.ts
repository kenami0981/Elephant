import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterBottomDTO } from './footer-bottom.dto';

export const GETS_ALL_FOOTER_BOTTOM_DTO = new InjectionToken<GetsAllFooterBottomDtoPort>('GETS_ALL_FOOTER_BOTTOM_DTO');

export interface GetsAllFooterBottomDtoPort {
  getAll(): Observable<FooterBottomDTO[]>;
}
