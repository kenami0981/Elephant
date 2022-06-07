import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopProductDTO } from './top-product.dto';

export const GETS_ALL_TOP_PRODUCT_DTO =
  new InjectionToken<GetsAllTopProductDtoPort>('GETS_ALL_TOP_PRODUCT_DTO');

export interface GetsAllTopProductDtoPort {
  getAll(): Observable<TopProductDTO[]>;
}
