import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutHeroDTO } from '../../../application/ports/secondary/dto/about-hero.dto';
import { GETS_ONE_ABOUT_HERO_DTO, GetsOneAboutHeroDtoPort } from '../../../application/ports/secondary/dto/gets-one-about-hero.dto-port';
import { GETS_ALL_ABOUT_HERO_DTO, GetsAllAboutHeroDtoPort } from '../../../application/ports/secondary/dto/gets-all-about-hero.dto-port';

@Component({ selector: 'lib-about-hero', templateUrl: './about-hero.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AboutHeroComponent {
  hero$: Observable<AboutHeroDTO> = this._getsOneAboutHeroDto.getOne('1f6SIm5dLWXbtztVJs6V');
  heroFeatured$: Observable<AboutHeroDTO[]> = this._getsAllAboutHeroDto.getAll();

  constructor(@Inject(GETS_ONE_ABOUT_HERO_DTO) private _getsOneAboutHeroDto: GetsOneAboutHeroDtoPort, @Inject(GETS_ALL_ABOUT_HERO_DTO) private _getsAllAboutHeroDto: GetsAllAboutHeroDtoPort) {
  }
}
