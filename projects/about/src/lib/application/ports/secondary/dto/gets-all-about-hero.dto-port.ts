import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutHeroDTO } from './about-hero.dto';

export const GETS_ALL_ABOUT_HERO_DTO =
  new InjectionToken<GetsAllAboutHeroDtoPort>('GETS_ALL_ABOUT_HERO_DTO');

export interface GetsAllAboutHeroDtoPort {
  getAll(): Observable<AboutHeroDTO[]>;
}
