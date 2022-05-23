import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationDTO } from './navigation.dto';

export const GETS_ALL_NAVIGATION_DTO = new InjectionToken<GetsAllNavigationDtoPort>('GETS_ALL_NAVIGATION_DTO');

export interface GetsAllNavigationDtoPort {
  getAll(): Observable<NavigationDTO[]>;
}
