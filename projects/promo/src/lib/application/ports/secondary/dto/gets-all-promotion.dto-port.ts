import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PromotionDTO } from './promotion.dto';

export const GETS_ALL_PROMOTION_DTO =
  new InjectionToken<GetsAllPromotionDtoPort>('GETS_ALL_PROMOTION_DTO');

export interface GetsAllPromotionDtoPort {
  getAll(): Observable<PromotionDTO[]>;
}
