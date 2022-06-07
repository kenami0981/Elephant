import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopProductDTO } from './top-product.dto';

export const GETS_ONE_TOP_PRODUCT_DTO =
  new InjectionToken<GetsOneTopProductDtoPort>('GETS_ONE_TOP_PRODUCT_DTO');

export interface GetsOneTopProductDtoPort {
  getOne(id: string): Observable<TopProductDTO>;
}
