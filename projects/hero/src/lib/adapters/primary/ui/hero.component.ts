import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HeroDTO } from '../../../application/ports/secondary/hero.dto';
import {
  GETS_ONE_HERO_TEXT_DTO,
  GetsOneHeroTextDtoPort,
} from '../../../application/ports/secondary/gets-one-hero-text.dto-port';

@Component({
  selector: 'lib-hero',
  templateUrl: './hero.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  text$: Observable<HeroDTO> = this._getsOneHeroTextDto.getOne(
    'bijHilAJlJpdcg1zaT1B'
  );

  constructor(
    @Inject(GETS_ONE_HERO_TEXT_DTO)
    private _getsOneHeroTextDto: GetsOneHeroTextDtoPort
  ) {}
}
