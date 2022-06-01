import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FoundersDTO } from './founders.dto';

export const GETS_ONE_FOUNDERS_DTO = new InjectionToken<GetsOneFoundersDtoPort>('GETS_ONE_FOUNDERS_DTO');

export interface GetsOneFoundersDtoPort {
  getOne(id: string): Observable<FoundersDTO>;
}
