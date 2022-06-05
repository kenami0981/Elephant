import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutHeroDTO } from './about-hero.dto';

export const GETS_ONE_ABOUT_HERO_DTO =
  new InjectionToken<GetsOneAboutHeroDtoPort>('GETS_ONE_ABOUT_HERO_DTO');

export interface GetsOneAboutHeroDtoPort {
  getOne(id: string): Observable<AboutHeroDTO>;
}
