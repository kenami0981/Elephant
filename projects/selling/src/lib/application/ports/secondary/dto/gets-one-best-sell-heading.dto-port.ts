import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { BestSellHeadingDTO } from './best-sell-heading.dto';

export const GETS_ONE_BEST_SELL_HEADING_DTO = new InjectionToken<GetsOneBestSellHeadingDtoPort>('GETS_ONE_BEST_SELL_HEADING_DTO');

export interface GetsOneBestSellHeadingDtoPort {
  getOne(id: string): Observable<BestSellHeadingDTO>;
}
