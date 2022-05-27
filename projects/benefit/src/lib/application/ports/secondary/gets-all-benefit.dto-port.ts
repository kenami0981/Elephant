import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { BenefitDTO } from './benefit.dto';

export const GETS_ALL_BENEFIT_DTO = new InjectionToken<GetsAllBenefitDtoPort>('GETS_ALL_BENEFIT_DTO');

export interface GetsAllBenefitDtoPort {
  getAll(criterion?: Partial<BenefitDTO>): Observable<BenefitDTO[]>;
}
