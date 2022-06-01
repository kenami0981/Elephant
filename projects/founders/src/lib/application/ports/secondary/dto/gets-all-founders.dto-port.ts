import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FoundersDTO } from './founders.dto';

export const GETS_ALL_FOUNDERS_DTO = new InjectionToken<GetsAllFoundersDtoPort>('GETS_ALL_FOUNDERS_DTO');

export interface GetsAllFoundersDtoPort {
  getAll(): Observable<FoundersDTO[]>;
}
