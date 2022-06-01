import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterIconDTO } from './footer-icon.dto';

export const GETS_ALL_FOOTER_ICON_DTO = new InjectionToken<GetsAllFooterIconDtoPort>('GETS_ALL_FOOTER_ICON_DTO');

export interface GetsAllFooterIconDtoPort {
  getAll(): Observable<FooterIconDTO[]>;
}
