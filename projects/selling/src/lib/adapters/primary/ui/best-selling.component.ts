import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { BestSellDTO } from '../../../application/ports/secondary/dto/best-sell.dto';
import { GETS_ALL_BEST_SELL_DTO, GetsAllBestSellDtoPort } from '../../../application/ports/secondary/dto/gets-all-best-sell.dto-port';

@Component({ selector: 'lib-best-selling', templateUrl: './best-selling.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class BestSellingComponent {
  bestSells$: Observable<BestSellDTO[]> = this._getsAllBestSellDto.getAll();

  constructor(@Inject(GETS_ALL_BEST_SELL_DTO) private _getsAllBestSellDto: GetsAllBestSellDtoPort) {
  }
}
