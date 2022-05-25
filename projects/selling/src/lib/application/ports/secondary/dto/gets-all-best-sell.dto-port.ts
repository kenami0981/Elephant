import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { BestSellDTO } from './best-sell.dto';

export const GETS_ALL_BEST_SELL_DTO = new InjectionToken<GetsAllBestSellDtoPort>('GETS_ALL_BEST_SELL_DTO');

export interface GetsAllBestSellDtoPort {
  getAll(): Observable<BestSellDTO[]>;
}
