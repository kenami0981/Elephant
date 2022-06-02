import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductHeaderDTO } from './product-header.dto';

export const GETS_ONE_PRODUCT_HEADER_DTO = new InjectionToken<GetsOneProductHeaderDtoPort>('GETS_ONE_PRODUCT_HEADER_DTO');

export interface GetsOneProductHeaderDtoPort {
  getOne(id: string): Observable<ProductHeaderDTO>;
}
