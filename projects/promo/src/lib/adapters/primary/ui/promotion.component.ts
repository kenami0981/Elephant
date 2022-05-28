
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PromotionDTO } from '../../../application/ports/secondary/dto/promotion.dto';
import { GETS_ALL_PROMOTION_DTO, GetsAllPromotionDtoPort } from '../../../application/ports/secondary/dto/gets-all-promotion.dto-port';

import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';


@Component({
  selector: 'lib-promotion',
  templateUrl: './promotion.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PromotionComponent {
  promotions$: Observable<PromotionDTO[]> = this._getsAllPromotionDto.getAll();

  constructor(@Inject(GETS_ALL_PROMOTION_DTO) private _getsAllPromotionDto: GetsAllPromotionDtoPort) {
  }
}

